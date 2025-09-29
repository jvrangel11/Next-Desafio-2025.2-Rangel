export type ApiProps = {
    id: number;
    title: string;
    text: string;
}

type ApiReponse = {
    identities: ApiProps[];
    status: number;
}

export async function getIdentities(): Promise<ApiProps[]> {
    const res = await fetch("https://treinamentoapi.codejr.com.br/api/identities");

    if (!res.ok) {
        throw new Error("Failed to fetch data, Status: " + res.status);
    }

    const data: ApiReponse = await res.json();

    return data.identities;
}