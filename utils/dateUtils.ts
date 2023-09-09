const countYearsMonths = (startDate: Date, endDate: Date) => {
    const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = endDate.getMonth() - startDate.getMonth();
    const totalMonths = yearsDiff * 12 + monthsDiff;

    return {
        years: Math.floor(totalMonths / 12),
        months: totalMonths % 12
    };
};

const startDate = new Date("2021-03-14T23:00:00.000Z");
const endDate = new Date(Date.now());

countYearsMonths(startDate, endDate);

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
