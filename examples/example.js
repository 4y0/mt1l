var utils = require('../../../utils');
function vinfo(req, res, next){

	utils.jsonS(res, {versionInfo:"PELICANPAY-API VERSION 1", stamp:new Date()}, "Version Info");

}
/*
== MULTI METHOD / CONFIG ==
vinfo.routeConfig = [{}, {}];
vinfo.routeConfig[0].path = "/v12"; 
vinfo.routeConfig[0].method = "post"; 
vinfo.routeConfig[0].middlewares = ['v1'];

vinfo.routeConfig[1].path = "/v12"; 
vinfo.routeConfig[1].method = "get"; 
vinfo.routeConfig[1].middlewares = [];
*/
vinfo.routeConfig = {};
vinfo.routeConfig.path = "/v12"; 
vinfo.routeConfig.method = "get"; 
vinfo.routeConfig.middlewares = ['v1'];
module.exports = vinfo;