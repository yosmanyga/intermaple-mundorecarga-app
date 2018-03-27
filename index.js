import React from 'react';
import {AppLoading, Font, KeepAwake, registerRootComponent} from 'expo';
import {FooterLayout, Platform, Root, Theme} from "@yosmy/ui";
import Sentry from 'sentry-expo';
import {Front, ServerErrorMessage, ConnectionErrorMessage} from '@intermaple/mundorecarga-ui/build/index.js';
// import {Front, ServerErrorMessage, ConnectionErrorMessage} from './src/UI';
import icons from './src/Icons';

let base;

if (__DEV__) {
    KeepAwake.activate();

    // base = 'http://192.168.0.5';
    base = 'http://192.168.0.11';
} else {
    base = 'https://api.mundorecarga.com';
}

Sentry.config('https://ccd056b5f7a24db89fcff8f18384c3f9@sentry.io/279788').install();

class App extends React.Component {
    state = {
        ready: false,
        location: '/',
        payload: {},
        error: false, // "server", "connection"
    };

    componentDidCatch(error, info) {
        if (error && error.code) {
            if (error.code === "server") {
                this.setState({
                    error: "server"
                });

                Sentry.captureException(
                    error,
                    {
                        extra: info
                    }
                );
            } else if (error.code === "connection") {
                this.setState({
                    error: "connection"
                });
            }
        } else {
            this.setState({
                error: "other"
            });

            Sentry.captureException(
                error,
                {
                    extra: info
                }
            );
        }
    }

    _loadResources = async () => {
        return Promise.all([
            Font.loadAsync({
                'Roboto': require('native-base/Fonts/Roboto.ttf'),
                'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            }),
        ])
    };

    render() {
        if (
            this.state.ready === false
        ) {
            return <AppLoading
                startAsync={this._loadResources}
                onFinish={() => {
                    this.setState({
                        ready: true
                    });
                }}
                onError={console.warn}
            />;
        }

        return <Root theme={{
            spacing: {
                unit: 1
            },
            palette: {
                // primary: ""
            }
        }}>
            {(
                this.state.error === "server"
                || this.state.error === "other"
            ) && <ServerErrorMessage />}
            {this.state.error === "connection" && <ConnectionErrorMessage
                icons={icons}
                onRetry={() => {
                    this.setState({
                        error: false
                    });
                }}
            />}
            {this.state.error === false && <Front
                icons={icons}
                blankLayout={this._buildBlankLayout}
                frontendLayout={this._buildFrontendLayout}
                drawerLayout={this._buildDrawerLayout}
                debug={__DEV__}
                api={{
                    base: base
                }}
                navigation={{
                    location: this.state.location,
                    payload: this.state.payload,
                    onNavigate: this._handleNavigate
                }}
                onError={this._handleError}
            />}
        </Root>;
    }

    _buildBlankLayout = ({children, ...props}) => {
        return <FooterLayout
            {...props}
        >
            {children}
        </FooterLayout>
    };

    _buildFrontendLayout = ({children, ...props}) => {
        return <FooterLayout
            {...props}
        >
            {children}
        </FooterLayout>
    };

    _buildDrawerLayout = ({children, ...props}) => {
        return <FooterLayout
            {...props}
        >
            {children}
        </FooterLayout>
    };

    _handleNavigate = (location, payload = {}, callback = null) => {
        this.setState({
            location: location,
            payload: payload
        }, callback);
    };

    _handleError = (response) => {
        const {code} = response;

        switch (code) {
            case "server":
                this.setState({
                    error: "server"
                });

                break;
            case "connection":
                this.setState({
                    error: "connection"
                });

                break;
            default:
                throw response;
        }
    };
}

const InjectedApp = Platform.dimensions.withWidth()(Theme.withTheme()(App));

export default InjectedApp;

registerRootComponent(InjectedApp);
