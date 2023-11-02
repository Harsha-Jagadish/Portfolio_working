import { Social } from "../typings";

export const fetchSocials = async (): Promise<Social[]> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
        if (!res.ok) {
            throw new Error("Failed to fetch socials");
        }

        const data: { socials: Social[] } = await res.json();
        console.log("Fetched socials:", data.socials);
        return data.socials;
    } catch (error) {
        console.error("Error fetching socials:", error);
        return [];
    }
};
