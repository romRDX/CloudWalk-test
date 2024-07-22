export const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
};

export const fetchMultipleData = async (urls) => {
  
    try {
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const allData = await Promise.all(responses.map(response => response.json()));

        return { results: allData };
    } catch (error) {
        console.error('Error fetching planets:', error);
    }
};