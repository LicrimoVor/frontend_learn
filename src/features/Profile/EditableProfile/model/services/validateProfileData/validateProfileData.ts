import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../../types/validateProfileError';

export const validateProfileData = (profile?: Profile): ValidateProfileError[] => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const {
        first, lastname, age, country,
    } = profile;

    const errors: ValidateProfileError[] = [];

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }
    return errors;
};
