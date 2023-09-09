export default defineEventHandler(() => {
    return [
        {
            id: "video_games",
            title: "Video games",
            subtitle: "Favourites:",
            items: ["Terraria", "Minecraft", "Yakuza", "Chrono Trigger", "Mother 3"]
        },
        {
            id: "programming",
            title: "Programming",
            subtitle: "Especially:",
            items: ["Frontend & design", "Automation", "Game dev", "Smart home"]
        },
        {
            id: "gardening",
            title: "Gardening",
            subtitle: "To note:",
            items: [
                "Automated irrigation system",
                "2 meter long tomato plant",
                "No garden",
                "All done from a balcony"
            ]
        },
        {
            id: "anime",
            title: "Anime",
            subtitle: "Favourites:",
            items: [
                "Gintama",
                "Mob Psycho 100",
                "Fullmetal Alchemist",
                "Your lie in April"
            ]
        }
    ];
});
