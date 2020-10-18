const PATH_BASE = 'https://api.udilia.com/coins/v1';
const PATH_CURRENCIES = '/cryptocurrencies';
const PATH_PAGE = 'page=';
const PATH_PERPAGE = 'perPage=';
const PATH_SEARCH = 'searchQuery=';
const PATH_AUTOCOMPLETE = '/autocomplete';


const getResource = async (url) => {

    const res = await fetch(`${PATH_BASE}${url}`);

    if (!res.ok) {
        return res.status;
    }

    return await res.json();

};


export const getCurrenciesWithPage = async (page, perPage) => await getResource(`${PATH_CURRENCIES}?${PATH_PAGE}${page}&${PATH_PERPAGE}${perPage}`);
export const getAutoCompleteCurrency = async (name) => await getResource(`${PATH_AUTOCOMPLETE}?${PATH_SEARCH}${name}`);
export const getSpecificCurrency = async (id) => await getResource(`${PATH_CURRENCIES}/${id}`);