interface NAVEnvironment {
    get Busy(): boolean;
}


declare global {
    interface Window {
        Microsoft?: {
            Dynamics?: {
                NAV?: {
                    GetEnvironment(): NAVEnvironment;
                    InvokeExtensibilityMethod(name: string, arguments: unknown[], skipIfBusy: boolean, successCallback?: () => void, errorCallback?: () => void): void;
                };
            };
        };
        OnInvokeResult?: (result: unknown) => void;
    }
}

export { };
