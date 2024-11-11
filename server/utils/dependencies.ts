import { ApplicantFormRepository } from "@server/repository/ApplicantFormRepository";
import { ApplicantStatusRepository } from "@server/repository/ApplicantStatusRepository";
import { CommentRepository } from "@server/repository/CommentRepository";
import { DepartmentRepository } from "@server/repository/DepartmentRepository";
import { JobRequestRepository } from "@server/repository/JobRequestRepository";
import { OfficeRepository } from "@server/repository/OfficeRepository";
import { RatingFormsRepository } from "@server/repository/RatingFormsRepository";
import { StagesFormRepository } from "@server/repository/StagesFormRepository";
import { UserRepository } from "@server/repository/UsersRepository";
import { ApplicantFormService } from "@server/service/ApplicantFormService";
import { ApplicantStatusService } from "@server/service/ApplicantStatusService";
import { CommentService } from "@server/service/CommentService";
import { DepartmentService } from "@server/service/DepartmentService";
import { JobRequestService } from "@server/service/JobRequestService";
import { OfficeService } from "@server/service/OfficeService";
import { RatingFormsService } from "@server/service/RatingFormsService";
import { StagesFormService } from "@server/service/StagesFormService";
import { UsersService } from "@server/service/UsersService";

const applicantFormRepo = new ApplicantFormRepository();
const applicantStatusRepo = new ApplicantStatusRepository();
const userRepo = new UserRepository();
const stagesFormRepo = new StagesFormRepository();
const departmentRepo = new DepartmentRepository();
const officeRepo = new OfficeRepository();
const jobRequestRepo = new JobRequestRepository();
const ratingFormsRepo = new RatingFormsRepository();
const commentRepo = new CommentRepository();

const applicantFormService = new ApplicantFormService(
	applicantFormRepo,
	departmentRepo,
	officeRepo,
	jobRequestRepo
);
const applicantStatusService = new ApplicantStatusService(applicantStatusRepo);
const userService = new UsersService(userRepo, departmentRepo, officeRepo);
const stagesFormService = new StagesFormService(stagesFormRepo);
const departmentService = new DepartmentService(departmentRepo);
const officeService = new OfficeService(officeRepo);
const jobRequestService = new JobRequestService(jobRequestRepo);
const ratingFormsService = new RatingFormsService(ratingFormsRepo);
const commentService = new CommentService(commentRepo);

export {
	applicantFormService,
	applicantStatusService,
	commentService,
	departmentService,
	jobRequestService,
	officeService,
	ratingFormsService,
	stagesFormService,
	userService,
};
