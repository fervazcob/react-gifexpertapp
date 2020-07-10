
export const getGifs = async ( category ) => {
        
    const api_key = 'kWMBYZ4EoLxcWaVx2aU732gEO4Dsjzan';
    const limit = 10;

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${encodeURI(category)}&limit=${limit}`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gif = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });

    return gif;

}