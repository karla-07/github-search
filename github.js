class Github {
    constructor() {
        this.client_id = 'dd77e251d34bd507dea58';
        this.client_secret = '958bc71180149c52f5e9b02a70a1d12c60300400';
        this.repos_count = 5;
        this.repos_sort = 'create: asc';

    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();

    const repos = await repoResponse.json();



    return {
        profile,
        repos
    };
}
}