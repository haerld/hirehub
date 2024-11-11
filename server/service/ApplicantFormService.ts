import { revalidatePath } from "next/cache";
import { DataExtractor } from "@server/utils/extractor/ApplicantForm";
import { ApplicantFormRepository } from "@server/repository/ApplicantFormRepository";
import { DepartmentRepository } from "@server/repository/DepartmentRepository";
import { JobRequestRepository } from "@server/repository/JobRequestRepository";
import { OfficeRepository } from "@server/repository/OfficeRepository";
import { ApplicantForm, Validator } from "@server/utils/validator/ApplicantForm";

export class ApplicantFormService {
	constructor(
		private readonly applicantRepo: ApplicantFormRepository,
		private readonly departmentRepo: DepartmentRepository,
		private readonly officeRepo: OfficeRepository,
		private readonly jobRequestRepo: JobRequestRepository
	) {}

	public async getAllApplicantForm() {
		try {
			return await this.applicantRepo.getAllApplicantForm();
		} catch (error) {
			throw new Error("Fetching all applicant form failed: ", error!);
		}
	}

	public async getAllApplicantByDeptOrOffice(
		department_id: number | null,
		office_id: number | null
	) {
		try {
			return await this.applicantRepo.getAllApplicantByDeptOrOffice(department_id, office_id);
		} catch (error) {
			throw new Error("Fetching applicant by department or office failed: ", error!);
		}
	}

	public async getApplicantFormByID(id: number) {
		try {
			return await this.applicantRepo.getApplicantFormByID(id);
		} catch (error) {
			throw new Error("Fetching applicant form by ID failed: ", error!);
		}
	}

	public async create(formData: FormData, jobId: number) {
		const applicantFormData = DataExtractor.extractApplicantFormData(formData);
		console.log("Applicant form data:", applicantFormData);
		this.validateApplicantFormData(applicantFormData);

		const job = await this.jobRequestRepo.getJobRequestByID(jobId);

		try {
			await this.applicantRepo.createApplicantForm({
				...applicantFormData,
				contact_number: Number(applicantFormData.contact_number),
				department_id: job?.department_id,
				office_id: job?.office_id,
				selected_department: job?.requested_department,
				selected_office: job?.requested_office,
				position_applied: job?.requested_position ?? "",
				positionType: job?.requested_category ?? "",
				resume: {
					resume_name: applicantFormData.resume_name,
					resume_url: applicantFormData.resume_url,
					letter_name: applicantFormData.letter_name,
					letter_url: applicantFormData.letter_url,
				},
			});
			console.log("Applicant Final form data:", applicantFormData);
			revalidatePath("/dashboard/applicant");
		} catch (error) {
			console.error("Error insertion", error);
			throw new Error("Database insertion failed");
		}
	}

	private validateApplicantFormData(applicantFormData: ApplicantForm): void {
		const validateData = Validator.validateApplicantFormData(applicantFormData);
		if (!validateData.success) {
			console.error("Validation failed:", validateData.error);
			throw new Error("Validation failed");
		}
	}
}
