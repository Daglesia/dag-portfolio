export default defineEventHandler(() => {
    return [
        {
            id: "withsecure-junior",
            title: "WithSecure",
            startDate: new Date(2021, 2, 15),
            position: "Software engineer",
            skills: ["typescript", "css", "aws"],
        },
        {
            id: "withsecure-intern",
            title: "WithSecure",
            startDate: new Date(2021, 2, 15),
            endDate: new Date(2022, 2, 15),
            position: "Software engineer 2",
            skills: ["typescript", "css"],
        }
    ];
});
