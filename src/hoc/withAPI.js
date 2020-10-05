import React from "react";
import { CryptoAPIService } from "../CryptoAPIService";

const service = new CryptoAPIService();

export default function withAPI(Wrapped) {
    return class extends React.Component {
        render() {
            return <Wrapped {...this.props} service={service}/>
        }
    }
}
