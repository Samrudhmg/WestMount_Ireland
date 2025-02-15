import { routeFormConfig } from '../config/form-routes-config';

export interface CreateLeadDTO {
  name: string;
  phone: string;
  email: string;
  interestedCourse: 'ACCA' | 'CA' | 'CMA IND' | 'CMA US' | 'CS' | 'Commerce Entrance';
  latestQualification?: 'Plus One' | 'Plus Two' | 'UG' | 'PG' | 'Commerce Professional Student';
  leadSubSource: string | null;
  leadSource: string;
  [key: string]: string | undefined | null;
}

export async function createLead(data: CreateLeadDTO, pathname: string) {
  const routeFields = routeFormConfig[pathname] ?? {};
  try {
    const response = await fetch(
      'https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZmMDYzMzA0MzM1MjZjNTUzMDUxMzMi_pc',
      {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        body: JSON.stringify({
          phoneNumber: data.phone,
          name: data.name,
          latestQualification: data.latestQualification,
          interestedCourse: data.interestedCourse,
          email: data.email,
          leadSubSource: data.leadSubSource,
          leadSource: data.leadSource,
          registrationDate: new Date().toISOString().replace('T', ' ').split('.')[0],
          ...routeFields,
        }),
      },
    );

    return response.ok;
  } catch (error) {
    console.error(error);
  }
}
