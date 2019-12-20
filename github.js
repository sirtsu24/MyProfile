class GitHub
{
    constructor()
    {
        this.client_ID = '122956965df5e4fa7e7d';
        this.client_secret = 'c21c8c125692106b1ee4b9d38e8e366953952ad3';
        this.repos_count = 10;
        this.repos_sort = 'created: asc';
        this.user = 'sirtsu24';
        this.apiUrl = 'https://api.github.com/users/';
    }

    async getUserData(){
        // `` - backticks
        let urlProfile = `${this.apiUrl}${this.user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`; 
        let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_secret}`;

        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return{
            profile,
            repos
        }
    }

}