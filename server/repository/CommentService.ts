import { revalidatePath } from "next/cache";
import { DataExtractor } from "~/DataExtractor/Comment";
import { CommentRepository } from "~/repository/CommentRepository";
import { StageType } from "~/types/types";
import { CommentType, Validator } from "~/Validator/Comment";

export class CommentService {
	constructor(private readonly commentRepo: CommentRepository) {}

	public async getAllCommentsById(id: number) {
		try {
			return await this.commentRepo.getAllCommentsById(id);
		} catch (error) {
			throw new Error("Fetching all comments failed");
		}
	}

	public async getCommentsByID(id: number, commentId: number[]) {
		try {
			return await this.commentRepo.getCommentsByID(id, commentId);
		} catch (error) {
			throw new Error("Fetching comments by ID failed");
		}
	}

	public async createScreeningComment(formData: FormData) {
		const comment = DataExtractor.extractApplicantScreeningComment(formData);
		this.validateComment(comment);

		try {
			await this.commentRepo.updateApplicantScreeningComment(comment.applicant_id, comment);

			revalidatePath(`/dashboard/applicant/${comment.applicant_id}`);
		} catch (error) {
			console.error("Update Applicant Status failed:", error);
			throw new Error("Update Applicant Status failed");
		}
	}

	public async createPsychologicalExamComment(formData: FormData) {
		await this.createComment(formData, "psychological_exam");
	}

	public async createComment(formData: FormData, commentType: StageType) {
		const comment = DataExtractor.extractApplicantScreeningComment(formData);
		this.validateComment(comment);

		try {
			await this.commentRepo.updateApplicantComment(
				comment.applicant_id,
				comment,
				commentType
			);

			revalidatePath(`/dashboard/applicant/${comment.applicant_id}`);
		} catch (error) {
			console.error("Update Applicant Status failed:", error);
			throw new Error("Update Applicant Status failed");
		}
	}

	private validateComment(comment: CommentType): void {
		const validateData = Validator.validateComment(comment);
		if (!validateData.success) {
			console.error("Validation failed:", validateData.error);
			throw new Error(`Validation failed: ${validateData.error}`);
		}
	}
}
