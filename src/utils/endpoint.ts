interface IEndpoint {
    endpoint: string,
    url: string,
}

const endpoint = (feature: string, route: string): IEndpoint => ({
    endpoint: `${feature} ${route}`,
    url: route,
});

export default endpoint;