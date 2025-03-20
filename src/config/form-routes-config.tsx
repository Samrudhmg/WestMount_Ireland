export interface ExtraFormFields {
    [key: string]: string | number | boolean;
}

export const routeFormConfig: Record<string, ExtraFormFields> = {
    "/ca-foundation": {},
    "cma-usa-working-working-professional": {},
};
