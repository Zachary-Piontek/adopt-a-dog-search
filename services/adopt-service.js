const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getDogs(breed, age, { start, end }) {
    let query = client
        .from('dogs')
        // *** set option to return an exact count
        .select('id, name, breed');

    // *** add breed and age filters if they exist

    // *** add paging by setting a range modifier

    const response = await query;

    return response;
}

export async function getDog(id) {
    const response = await client
        .from('dogs')
        .select()
        .match({ id: id })
        .single();

    return checkError(response);
}

function checkError({ data, error }) {
    // eslint-disable-next-line no-console
    return error ? console.error(error) : data;
}