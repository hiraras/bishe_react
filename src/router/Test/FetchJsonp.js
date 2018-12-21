import React, { Component } from 'react';
import md5 from 'md5';
import { stringify } from 'qs';
import fetchJsonp from 'fetch-jsonp';

class FetchJsonp extends Component{

    componentDidMount() {
        this.init();
    }

    init = () => {
        const timestamp = Math.floor(new Date() / 1000);
        const enterpriseId = '7000129';
        const companyToken = '428b05e7537e402d87dd6e6879da4a16';
        const sign = md5(`${enterpriseId}${timestamp}${companyToken}`);
        const crmId = 'TCC1000095';
        const params = {
            validateType: 2,
            enterpriseId,
            timestamp,
            sign,
            cno: '1002',
            bindTel: '18069812010',
            bindType: 1,
            crmId,
        };
        this.doLogin(params);
    }

    doLogin = async params => {
        const url = 'http://api-test-2.cticloud.cn/interface/v10/agentLogin/authenticateJsonp';
        const response = await this.request(url, params);
        console.log(response);
        this.agentLogin(params);
    }

    agentLogin = async params => {
        const url = 'http://api-test-2.cticloud.cn/interface/v10/agent/login';
        const response = await this.request(url, params);
        console.log(response);
    }

    request = (url, params) => {
        return fetchJsonp(`${url}?${stringify(params)}`).then(r => {
            return r.json();
        }).then(data => {
            return JSON.parse(data);
        });
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default FetchJsonp;
