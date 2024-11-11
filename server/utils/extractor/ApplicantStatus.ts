export class DataExtractor {
	static extractApplicantStagesDate(formData: FormData) {
		return {
			applicant_id: Number(formData.get("applicant_id")),
			selected_date: formData.get("selected_date") as string,
		};
	}

	static extractApplicantStages(formData: FormData) {
		const assessedByString = formData.get("assessed_by") as string;
		const assessedByArray = assessedByString.split(",").map((item) => item.trim());

		return {
			applicant_id: Number(formData.get("applicant_id")),
			selected_date: formData.get("selected_date") as string,
			selected_mode: formData.get("selected_mode") as "online" | "in-person",
			assessed_by: assessedByArray,
		};
	}

	static extractRecommendationStage(formData: FormData) {
		const assessedByString = formData.get("assessed_by") as string;
		const assessedByArray = assessedByString.split(",").map((item) => item.trim());

		return {
			applicant_id: Number(formData.get("applicant_id")),
			selected_date: formData.get("selected_date") as string,
			assessed_by: assessedByArray,
		};
	}
}
