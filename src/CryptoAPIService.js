class CryptoAPIService {

    PATH_BASE = 'https://api.udilia.com/coins/v1';
    PATH_CURRENCIES = '/cryptocurrencies';
    PATH_PAGE = 'page=';
    PATH_PERPAGE = 'perPage=';
    PATH_SEARCH = 'searchQuery=';
    PATH_AUTOCOMPLETE = '/autocomplete';


    getResource = async (url) => {

        const res = await fetch(`${this.PATH_BASE}${url}`);

        if (!res.ok) {
            return res.status;
        }

        return await res.json();

    };


    getCurrenciesWithPage = async (page, perPage) => await this.getResource(`${this.PATH_CURRENCIES}?${this.PATH_PAGE}${page}&${this.PATH_PERPAGE}${perPage}`);
    getAutoCompleteCurrency = async (name) => await this.getResource(`${this.PATH_AUTOCOMPLETE}?${this.PATH_SEARCH}${name}`);
    getSpecificCurrency = async (id) => await this.getResource(`${this.PATH_CURRENCIES}/${id}`);


}

export { CryptoAPIService }