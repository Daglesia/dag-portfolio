const countYearsMonths = (startDate: Date, endDate: Date) => {
    const months =
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear());

    return {
        years: Math.round(months / 12),
        months: months % 12
    };
};

export const getFormattedStartEndFrame = (
    startString: string,
    endString: string | undefined
): string => {
    const startDate = new Date(startString);
    const endDate = new Date(endString ?? Date.now());

    const options: Intl.DateTimeFormatOptions = {
        year: "2-digit",
        month: "2-digit"
    };
    const dateFormat = (date: Date): string =>
        new Intl.DateTimeFormat("en-US", options).format(date).split("/").join(".");

    return `${dateFormat(startDate)} - ${dateFormat(endDate)}`;
};

export const getFormattedDuration = (
    startString: string,
    endString: string | undefined,
    shortened: boolean
): string => {
    const startDate = new Date(startString);
    const endDate = new Date(endString ?? Date.now());

    const duration = countYearsMonths(startDate, endDate);

    const yearsString = duration.years === 1 ? "year" : "years";
    if (duration.months !== 0) {
        return shortened
            ? `${duration.years.toString()}y ${duration.months.toString()}m`
            : `${duration.years.toString()} ${yearsString} ${duration.months.toString()} months`;
    }
    return shortened
        ? `${duration.years.toString()}y`
        : `${duration.years.toString()} ${yearsString}`;
};
