import { IValidator } from "../../../util/validators/types";
import { MAX_CHAR, REQUIRED, validate } from "../../../util/validators/validators";

export const validateField = (name: string, value: string) => {
    const validators: IValidator[] = [];
    switch (name) {
        case "title":
            validators.push({ type: REQUIRED }, { type: MAX_CHAR, value: 100 });
            break;
        case "image":
            validators.push({ type: REQUIRED });
            break;
        case "description":
            validators.push({ type: REQUIRED }, { type: MAX_CHAR, value: 500 });
            break;
        case "author":
            validators.push({ type: REQUIRED });
            break;
        default:
            break;
    }
    return validate(value, validators);
};