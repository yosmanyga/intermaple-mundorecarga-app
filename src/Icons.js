import React from "react";
import {Icon} from "@yosmy/ui";
import {
    MaterialIcons as MaterialIconsExpoIcon,
} from "@expo/vector-icons";

export default {
    objects: {
        check: (props) => {
            return <Icon
                name="checkmark"
                {...props}
            />
        },
        contact: (props) => {
            return <Icon
                name="contact"
                {...props}
            />
        },
        key: (props) => {
            return <Icon
                name="key"
                {...props}
            />
        },
        menu: (props) => {
            return <Icon
                name="menu"
                {...props}
            />
        },
        page: (props) => {
            return <Icon
                name="document"
                {...props}
            />
        },
        payment: (props) => {
            return <Icon
                name="cash"
                {...props}
            />
        },
        report: (props) => {
            return <Icon
                name="podium"
                {...props}
            />
        },
        selected: (props) => {
            return <MaterialIconsExpoIcon
                name="radio-button-checked"
                size={20}
                {...props}
            />
        },
        topup: (props) => {
            return <Icon
                name="send"
                {...props}
            />
        },
        unselected: (props) => {
            return <MaterialIconsExpoIcon
                name="radio-button-unchecked"
                size={20}
                {...props}
            />
        },
        //session
        user: (props) => {
            return <Icon
                name="contact"
                {...props}
            />
        },
        //card
        //contact
        //agent
    },
    menu: {
        admin: (props) => {
            return <Icon
                name="build"
                {...props}
            />
        },
        contacts: (props) => {
            return <Icon
                name="contacts"
                {...props}
            />
        },
        countries: (props) => {
            return <Icon
                name="flag"
                {...props}
            />
        },
        //help
        home: (props) => {
            return <Icon
                name="home"
                {...props}
            />
        },
        metadatas: (props) => {
            return <Icon
                name="cog"
                {...props}
            />
        },
        options: (props) => {
            return <Icon
                name="construct"
                {...props}
            />
        },
        providers: (props) => {
            return <Icon
                name="briefcase"
                {...props}
            />
        },
        promotions: (props) => {
            return <Icon
                name="gift"
                {...props}
            />
        },
        topups: (props) => {
            return <Icon
                name="flag"
                {...props}
            />
        },
        users: (props) => {
            return <Icon
                name="contact"
                {...props}
            />
        },
        //fraud
        //resellers
    },
    actions: {
        add: (props) => {
            return <Icon
                name="add"
                {...props}
            />
        },
        back: (props) => {
            return <Icon
                name="arrow-back"
                {...props}
            />
        },
        forward: (props) => {
            return <Icon
                name="arrow-forward"
                {...props}
            />
        },
        close: (props) => {
            return <Icon
                name="close"
                {...props}
            />
        },
        copy: (props) => {
            return <Icon
                name="copy"
                {...props}
            />
        },
        delete: (props) => {
            return <Icon
                name="trash"
                {...props}
            />
        },
        details: (props) => {
            return <Icon
                name="add"
                {...props}
            />
        },
        edit: (props) => {
            return <Icon
                name="create"
                {...props}
            />
        },
        join: (props) => {
            return <Icon
                name="hand"
                {...props}
            />
        },
        login: (props) => {
            return <Icon
                name="close"
                {...props}
            />
        },
        logout: (props) => {
            return <Icon
                name="close"
                {...props}
            />
        },
        ok: (props) => {
            return <Icon
                name="checkmark"
                {...props}
            />
        },
        print: (props) => {
            return <Icon
                name="print"
                {...props}
            />
        },
        refund: (props) => {
            return <Icon
                name="money-off"
                {...props}
            />
        },
        retry: (props) => {
            return <Icon
                name="refresh"
                {...props}
            />
        },
        search: (props) => {
            return <Icon
                name="search"
                {...props}
            />
        },
        topup: (props) => {
            return <Icon
                name="send"
                {...props}
            />
        },
        upload: (props) => {
            return <Icon
                name="arrow-dropup"
                {...props}
            />
        },
    },
    card: {
        number: (props) => {
            return <Icon
                name="card"
                {...props}
            />
        },
        name: (props) => {
            return <Icon
                name="contact"
                {...props}
            />
        },
        expiry: (props) => {
            return <Icon
                name="calendar"
                {...props}
            />
        },
        cvc: (props) => {
            return <Icon
                name="key"
                {...props}
            />
        },
        zip: (props) => {
            return <Icon
                name="pin"
                {...props}
            />
        },
    },
    topup: {
        steps: {
            delay: (props) => {
                return <Icon
                    name="time"
                    {...props}
                />
            },
            transfer: {
                success: (props) => {
                    return <Icon
                        name="checkmark-circle-outline"
                        {...props}
                    />
                },
                exception: (props) => {
                    return <Icon
                        name="alert"
                        {...props}
                    />
                }
            },
            refund: (props) => {
                return <Icon
                    name="undo"
                    {...props}
                />
            }
        }
    },
};
