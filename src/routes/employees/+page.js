
export async function load({ fetch }) {
    const url = "https://reqres.in/api/users?page=1"

    try {
        const response = await fetch(url, {
            headers: {
                "x-api-key": "reqres-free-v1",
            }
        });
        if (!response.ok) {
            throw new Error(`Response Status: ${response.status}`);
        }
        const employees = await response.json();
        return { employees };
    } catch (error) {
        console.error(error.message);
    }
}