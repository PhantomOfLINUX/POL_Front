const url = process.env.NEXT_PUBLIC_BASE_API;
export const isAdmin = async (): Promise<boolean> => {
    const response = await fetch(`${url}/api/players/me/profile`, {
        credentials: "include",
    });

    if (!response.ok) {
        return false;
    }

    const body = await response.json();
    const roles = body.roles;

    return roles.includes('ROLE_SUPER_ADMIN') || roles.includes('ROLE_ADMIN');
}