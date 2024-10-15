import * as i0 from '@angular/core';
import { InjectionToken, Injectable, inject, ENVIRONMENT_INITIALIZER, makeEnvironmentProviders, Injector, NgModule } from '@angular/core';
import { select, Store, META_REDUCERS, createSelector } from '@ngrx/store';
import * as i1 from '@ngrx/effects';
import { createEffect, EffectSources } from '@ngrx/effects';
import { merge, pipe, of, combineLatest, throwError as throwError$1 } from 'rxjs';
import { filter, tap as tap$1, mergeMap, take, map as map$1, catchError } from 'rxjs/operators';

var EntityActionTypes;
(function (EntityActionTypes) {
    EntityActionTypes["Load"] = "[Entity] (Generic) Load";
    EntityActionTypes["LoadIfNecessary"] = "[Entity] (Generic) Load (If Necessary)";
    EntityActionTypes["LoadSuccess"] = "[Entity] (Generic) Load: Success";
    EntityActionTypes["LoadFailure"] = "[Entity] (Generic) Load: Failure";
    EntityActionTypes["LoadMany"] = "[Entity] (Generic) Load Many";
    EntityActionTypes["LoadManyIfNecessary"] = "[Entity] (Generic) Load Many (If Necessary)";
    EntityActionTypes["LoadManySuccess"] = "[Entity] (Generic) Load Many: Success";
    EntityActionTypes["LoadManyFailure"] = "[Entity] (Generic) Load Many: Failure";
    EntityActionTypes["LoadAll"] = "[Entity] (Generic) Load All";
    EntityActionTypes["LoadAllIfNecessary"] = "[Entity] (Generic) Load All (If Necessary)";
    EntityActionTypes["LoadAllSuccess"] = "[Entity] (Generic) Load All: Success";
    EntityActionTypes["LoadAllFailure"] = "[Entity] (Generic) Load All: Failure";
    EntityActionTypes["LoadPage"] = "[Entity] (Generic) Load Page";
    EntityActionTypes["LoadPageIfNecessary"] = "[Entity] (Generic) Load Page (If Necessary)";
    EntityActionTypes["LoadPageSuccess"] = "[Entity] (Generic) Load Page: Success";
    EntityActionTypes["LoadPageFailure"] = "[Entity] (Generic) Load Page: Failure";
    EntityActionTypes["LoadRange"] = "[Entity] (Generic) Load Range";
    EntityActionTypes["LoadRangeIfNecessary"] = "[Entity] (Generic) Load Range (If Necessary)";
    EntityActionTypes["LoadRangeSuccess"] = "[Entity] (Generic) Load Range: Success";
    EntityActionTypes["LoadRangeFailure"] = "[Entity] (Generic) Load Range: Failure";
    EntityActionTypes["Create"] = "[Entity] (Generic) Create";
    EntityActionTypes["CreateSuccess"] = "[Entity] (Generic) Create: Success";
    EntityActionTypes["CreateFailure"] = "[Entity] (Generic) Create: Failure";
    EntityActionTypes["CreateMany"] = "[Entity] (Generic) Create Many";
    EntityActionTypes["CreateManySuccess"] = "[Entity] (Generic) Create Many: Success";
    EntityActionTypes["CreateManyFailure"] = "[Entity] (Generic) Create Many: Failure";
    EntityActionTypes["Update"] = "[Entity] (Generic) Update";
    EntityActionTypes["UpdateSuccess"] = "[Entity] (Generic) Update: Success";
    EntityActionTypes["UpdateFailure"] = "[Entity] (Generic) Update: Failure";
    EntityActionTypes["UpdateMany"] = "[Entity] (Generic) Update Many";
    EntityActionTypes["UpdateManySuccess"] = "[Entity] (Generic) Update Many: Success";
    EntityActionTypes["UpdateManyFailure"] = "[Entity] (Generic) Update Many: Failure";
    EntityActionTypes["Upsert"] = "[Entity] (Generic) Upsert";
    EntityActionTypes["UpsertSuccess"] = "[Entity] (Generic) Upsert: Success";
    EntityActionTypes["UpsertFailure"] = "[Entity] (Generic) Upsert: Failure";
    EntityActionTypes["UpsertMany"] = "[Entity] (Generic) Upsert Many";
    EntityActionTypes["UpsertManySuccess"] = "[Entity] (Generic) Upsert Many: Success";
    EntityActionTypes["UpsertManyFailure"] = "[Entity] (Generic) Upsert Many: Failure";
    EntityActionTypes["Replace"] = "[Entity] (Generic) Replace";
    EntityActionTypes["ReplaceSuccess"] = "[Entity] (Generic) Replace: Success";
    EntityActionTypes["ReplaceFailure"] = "[Entity] (Generic) Replace: Failure";
    EntityActionTypes["ReplaceMany"] = "[Entity] (Generic) Replace Many";
    EntityActionTypes["ReplaceManySuccess"] = "[Entity] (Generic) Replace Many: Success";
    EntityActionTypes["ReplaceManyFailure"] = "[Entity] (Generic) Replace Many: Failure";
    EntityActionTypes["Delete"] = "[Entity] (Generic) Delete";
    EntityActionTypes["DeleteSuccess"] = "[Entity] (Generic) Delete: Success";
    EntityActionTypes["DeleteFailure"] = "[Entity] (Generic) Delete: Failure";
    EntityActionTypes["DeleteMany"] = "[Entity] (Generic) Delete Many";
    EntityActionTypes["DeleteManySuccess"] = "[Entity] (Generic) Delete Many: Success";
    EntityActionTypes["DeleteManyFailure"] = "[Entity] (Generic) Delete Many: Failure";
    EntityActionTypes["DeleteByKey"] = "[Entity] (Generic) Delete by key";
    EntityActionTypes["DeleteByKeySuccess"] = "[Entity] (Generic) Delete by key: Success";
    EntityActionTypes["DeleteByKeyFailure"] = "[Entity] (Generic) Delete by key: Failure";
    EntityActionTypes["DeleteManyByKeys"] = "[Entity] (Generic) Delete many by keys";
    EntityActionTypes["DeleteManyByKeysSuccess"] = "[Entity] (Generic) Delete many by keys: Success";
    EntityActionTypes["DeleteManyByKeysFailure"] = "[Entity] (Generic) Delete many by keys: Failure";
    EntityActionTypes["Clear"] = "[Entity] (Generic) Clear";
    EntityActionTypes["Select"] = "[Entity] (Generic) Select";
    EntityActionTypes["SelectByKey"] = "[Entity] (Generic) Select by Key";
    EntityActionTypes["Selected"] = "[Entity] (Generic) Selection";
    EntityActionTypes["SelectMany"] = "[Entity] (Generic) Select Many";
    EntityActionTypes["SelectMore"] = "[Entity] (Generic) Select More";
    EntityActionTypes["SelectManyByKeys"] = "[Entity] (Generic) Select Many by Keys";
    EntityActionTypes["SelectMoreByKeys"] = "[Entity] (Generic) Select More by Keys";
    EntityActionTypes["SelectedMany"] = "[Entity] (Generic) Selection of Many";
    EntityActionTypes["SelectedMore"] = "[Entity] (Generic) Selection of More";
    EntityActionTypes["Deselect"] = "[Entity] (Generic) Deselect";
    EntityActionTypes["Deselected"] = "[Entity] (Generic) Deselection";
    EntityActionTypes["DeselectMany"] = "[Entity] (Generic) Deselect of Many";
    EntityActionTypes["DeselectManyByKeys"] = "[Entity] (Generic) Deselect of Many by Keys";
    EntityActionTypes["DeselectAll"] = "[Entity] (Generic) Deselect of All";
    EntityActionTypes["DeselectedMany"] = "[Entity] (Generic) Deselection of Many";
    EntityActionTypes["EditNew"] = "[Entity] (Generic) Edit New";
    EntityActionTypes["Edit"] = "[Entity] (Generic) Edit";
    EntityActionTypes["EditByKey"] = "[Entity] (Generic) Edit by Key";
    EntityActionTypes["Edited"] = "[Entity] (Generic) Edited";
    EntityActionTypes["EditedByKey"] = "[Entity] (Generic) Edited by Key";
    EntityActionTypes["Change"] = "[Entity] (Generic) Change";
    EntityActionTypes["Changed"] = "[Entity] (Generic) Changed";
    EntityActionTypes["EndEdit"] = "[Entity] (Generic) Edit: End";
    EntityActionTypes["EditEnded"] = "[Entity] (Generic) Edit: Ended";
})(EntityActionTypes || (EntityActionTypes = {}));

/* eslint-disable */
const uuid = (a, b) => {
    for (b = a = ''; a++ < 36; b += (a * 51) & 52 ? (a ^ 15 ? 8 ^ (Math.random() * (a ^ 20 ? 16 : 4)) : 4).toString(16) : '-')
        ;
    return b;
};
/* eslint-enable */

const compose = (...fns) => data => fns.reduce((value, fn) => fn(value), data);
const tpipe = (fn1, ...fns) => data => [fn1, ...fns].reduce((value, fn) => fn(value), data);
const map = (fn) => data => fn(data);
const tap = (fn) => data => {
    fn(data);
    return data;
};
const noop = () => void 0;
const not = (fn) => value => fn(!value);
const isUndefined = value => value === undefined;
const throwError = (message) => () => {
    throw new Error(message);
};
const iif = (predicate, whenTrue, whenFalse) => value => predicate(value) ? whenTrue(value) : whenFalse(value);
const asString = (value) => (value == null ? '' : String(value));
const replace = (exp, repl) => tpipe(asString, (str) => str.replace(exp, repl));

/* eslint-disable max-len */
const CAMEL_CASE_REGEXP = /([a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A])/g;
const CAMEL_CASE_UPPER_REGEXP = /([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A])([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A][a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A])/g;
const NON_WORD_REGEXP = /[^A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]+/g;
/* eslint-enable max-len */
const stripMatch = (replacement = ' ') => (match, index, value) => index === 0 || index === value.length - match.length ? '' : replacement;
const preserveNumbers = (preserve) => (str) => preserve ? str.replace(/ (?=\d)/g, '_') : str;
const lowerCase = (value) => compose(asString, (str) => str.toLowerCase())(value);
const upperCase = (value) => compose(asString, (str) => str.toUpperCase())(value);
const lowerCaseFirst = (value) => compose(asString, (str) => (str ? str[0].toLowerCase() + str.substring(1) : str))(value);
const upperCaseFirst = (value) => compose(asString, (str) => (str ? str[0].toUpperCase() + str.substring(1) : str))(value);
const noCase = (str) => compose(asString, 
// Support camel case ("camelCase" -> "camel Case").
replace(CAMEL_CASE_REGEXP, '$1 $2'), 
// Support odd camel case ("CAMELCase" -> "CAMEL Case").
replace(CAMEL_CASE_UPPER_REGEXP, '$1 $2'), 
// Remove all non-word characters and replace with a single space.
replace(NON_WORD_REGEXP, stripMatch()), 
// Convert to all lower case
lowerCase)(str);
/**
 * Camel case a string.
 *
 * @param  str: string to convert
 * @param  mergeNumbers: flag indicating whether to merge numbers
 * @return camel cased string
 */
const camelCase = (str, mergeNumbers = false) => {
    return compose(
    // Convert to lower case string of words
    noCase, 
    // Replace periods between numeric entities with an underscore.
    preserveNumbers(!mergeNumbers), 
    // Replace spaces between words with an upper cased character.
    replace(/ (.)/g, (m, $1) => $1.toUpperCase()))(str);
};
/**
 * Pascal case a string.
 *
 * @param  str: string to convert
 * @param  mergeNumbers: flag indicating whether to merge numbers
 * @return pascal cased string
 */
const pascalCase = (str, mergeNumbers = false) => upperCaseFirst(camelCase(str, mergeNumbers));

// NOTE: The following constants should be Symbol() to avoid any potential conflict with
// any user-defined properties on the entity models. However, use of Symbol() here causes
// problems with the Jest test runner at the current time
const ENTITY_OPTS_PROP = '__nae_entity_opts';
const NAE_KEYS = '__nae_keys';
const NAE_KEY_NAMES = '__nae_key_names';

function checkKeyName(type, modelName) {
    const keys = type.prototype[NAE_KEYS];
    if (keys === undefined) {
        console.error(`[NGRX-AE] Entity model '${modelName}' does not have a key specified!`);
        return false;
    }
    return true;
}
function getKeyNames(action) {
    const keys = action && action.info && action.info.modelType.prototype[NAE_KEYS];
    if (keys === undefined) {
        console.error(`[NGRX-AE] [getKeyNames()] Entity model '${action && action.info && action.info.modelName}' does not have a key specified!`);
    }
    return keys || [];
}
function getKeyNamesFromModel(type) {
    if (type === undefined) {
        console.error('[NGRX-AE] [getKeyNamesFromModel()] Specified type does not exist! Please provide a valid auto-entity model type.');
        return [];
    }
    const keys = type.prototype[NAE_KEYS];
    return keys || [];
}
function getKeyNamesFromEntity(entity) {
    if (!entity) {
        console.error('[NGRX-AE] [getKeyNamesFromEntity()] Specified entity does not exist! Please provide a valid auto-entity entity object.');
        return [];
    }
    const keys = entity[NAE_KEYS] || Object.getPrototypeOf(entity)[NAE_KEYS];
    return keys || [];
}
function _getKey(entity, keyNames) {
    if (!entity) {
        console.error(`[NGRX-AE] Specified entity does not exist! Please provide a valid auto-entity entity object.`);
        return undefined;
    }
    if (!keyNames || !keyNames.length) {
        console.error(`[NGRX-AE] Specified entity does not have any properties decorated as keys.`);
        return undefined;
    }
    if (keyNames.length === 1) {
        return entity[keyNames[0]];
    }
    // Combine composite key values into underscore-separated string
    const compositeKey = keyNames.map(key => entity[key]).reduce((ck, key) => ck + '_' + key.toString(), '');
    return compositeKey.substr(1);
}
function getKey(action, entity) {
    const keyNames = getKeyNames(action);
    return _getKey(entity, keyNames);
}
function getKeyFromModel(type, entity) {
    const keyNames = getKeyNamesFromModel(type);
    return _getKey(entity, keyNames);
}
function getKeyFromEntity(entity) {
    const keyNames = getKeyNamesFromEntity(entity);
    return _getKey(entity, keyNames);
}

/**
 * Sets the entity info for a given model.
 *
 * @param type The entity model type
 */
const setInfo = (type) => {
    const instance = new type();
    const opts = (type[ENTITY_OPTS_PROP] || { modelName: instance.constructor.name });
    const modelName = opts.modelName;
    checkKeyName(type, modelName);
    return {
        modelType: type,
        ...opts
    };
};
/**
 * Sets the action type info for a given model.
 *
 * @param actionType The type of entity action
 * @param info The entity info
 */
const setType = (actionType, info) => {
    const name = info.modelName;
    const entity = pascalCase(name);
    return actionType.replace('Entity', entity);
};
const setActionType = (actionType, type) => {
    const info = setInfo(type);
    const typedType = setType(actionType, info);
    return typedType;
};

/**
 * Structure for all of this library's actions
 */
class EntityAction {
    constructor(type, actionType, correlationId = uuid()) {
        this.actionType = actionType;
        this.correlationId = correlationId;
        this.info = setInfo(type);
        this.type = setType(this.actionType, this.info);
    }
}

/**
 * Clears all entities for this model from state
 */
class Clear extends EntityAction {
    constructor(type, correlationId) {
        super(type, EntityActionTypes.Clear, correlationId);
    }
}

/**
 * Creates a single entity, corresponding to HTTP POST operation
 */
class Create extends EntityAction {
    constructor(type, entity, criteria, correlationId) {
        super(type, EntityActionTypes.Create, correlationId);
        this.entity = entity;
        this.criteria = criteria;
    }
}
class CreateSuccess extends EntityAction {
    constructor(type, entity, criteria, correlationId) {
        super(type, EntityActionTypes.CreateSuccess, correlationId);
        this.entity = entity;
        this.criteria = criteria;
    }
}
class CreateFailure extends EntityAction {
    constructor(type, error, entity, criteria, correlationId) {
        super(type, EntityActionTypes.CreateFailure, correlationId);
        this.error = error;
        this.entity = entity;
        this.criteria = criteria;
    }
}
/**
 * Creates many entities, corresponding to HTTP POST operation
 */
class CreateMany extends EntityAction {
    constructor(type, entities, criteria, correlationId) {
        super(type, EntityActionTypes.CreateMany, correlationId);
        this.entities = entities;
        this.criteria = criteria;
    }
}
class CreateManySuccess extends EntityAction {
    constructor(type, entities, criteria, correlationId) {
        super(type, EntityActionTypes.CreateManySuccess, correlationId);
        this.entities = entities;
        this.criteria = criteria;
    }
}
class CreateManyFailure extends EntityAction {
    constructor(type, error, entities, criteria, correlationId) {
        super(type, EntityActionTypes.CreateManyFailure, correlationId);
        this.error = error;
        this.entities = entities;
        this.criteria = criteria;
    }
}

/**
 * Deletes a single entity, corresponding to HTTP DELETE operation
 */
class Delete extends EntityAction {
    constructor(type, entity, criteria, correlationId) {
        super(type, EntityActionTypes.Delete, correlationId);
        this.entity = entity;
        this.criteria = criteria;
    }
}
class DeleteSuccess extends EntityAction {
    constructor(type, entity, criteria, correlationId) {
        super(type, EntityActionTypes.DeleteSuccess, correlationId);
        this.entity = entity;
        this.criteria = criteria;
    }
}
class DeleteFailure extends EntityAction {
    constructor(type, error, entity, criteria, correlationId) {
        super(type, EntityActionTypes.DeleteFailure, correlationId);
        this.error = error;
        this.entity = entity;
        this.criteria = criteria;
    }
}
/**
 * Deletes many entities, corresponding to HTTP DELETE operation
 */
class DeleteMany extends EntityAction {
    constructor(type, entities, criteria, correlationId) {
        super(type, EntityActionTypes.DeleteMany, correlationId);
        this.entities = entities;
        this.criteria = criteria;
    }
}
class DeleteManySuccess extends EntityAction {
    constructor(type, entities, criteria, correlationId) {
        super(type, EntityActionTypes.DeleteManySuccess, correlationId);
        this.entities = entities;
        this.criteria = criteria;
    }
}
class DeleteManyFailure extends EntityAction {
    constructor(type, error, entities, criteria, correlationId) {
        super(type, EntityActionTypes.DeleteManyFailure, correlationId);
        this.error = error;
        this.entities = entities;
        this.criteria = criteria;
    }
}

/**
 * Deletes a single entity by key, corresponding to HTTP DELETE operation
 */
class DeleteByKey extends EntityAction {
    constructor(type, key, criteria, correlationId) {
        super(type, EntityActionTypes.DeleteByKey, correlationId);
        this.key = key;
        this.criteria = criteria;
    }
}
class DeleteByKeySuccess extends EntityAction {
    constructor(type, key, criteria, correlationId) {
        super(type, EntityActionTypes.DeleteByKeySuccess, correlationId);
        this.key = key;
        this.criteria = criteria;
    }
}
class DeleteByKeyFailure extends EntityAction {
    constructor(type, error, key, criteria, correlationId) {
        super(type, EntityActionTypes.DeleteByKeyFailure, correlationId);
        this.error = error;
        this.key = key;
        this.criteria = criteria;
    }
}
/**
 * Deletes many entities, corresponding to HTTP DELETE operation
 */
class DeleteManyByKeys extends EntityAction {
    constructor(type, keys, criteria, correlationId) {
        super(type, EntityActionTypes.DeleteManyByKeys, correlationId);
        this.keys = keys;
        this.criteria = criteria;
    }
}
class DeleteManyByKeysSuccess extends EntityAction {
    constructor(type, keys, criteria, correlationId) {
        super(type, EntityActionTypes.DeleteManyByKeysSuccess, correlationId);
        this.keys = keys;
        this.criteria = criteria;
    }
}
class DeleteManyByKeysFailure extends EntityAction {
    constructor(type, error, keys, criteria, correlationId) {
        super(type, EntityActionTypes.DeleteManyByKeysFailure, correlationId);
        this.error = error;
        this.keys = keys;
        this.criteria = criteria;
    }
}

/**
 * De-selects a single entity in the store
 */
class Deselect extends EntityAction {
    constructor(type, correlationId) {
        super(type, EntityActionTypes.Deselect, correlationId);
    }
}
/**
 * De-selects many entities in the store
 */
class DeselectMany extends EntityAction {
    constructor(type, entities, correlationId) {
        super(type, EntityActionTypes.DeselectMany, correlationId);
        this.entities = entities;
        if (!Array.isArray(entities)) {
            throw new Error('[NGRX-AE] ! DeselectMany action requires an array of entities.');
        }
    }
}
/**
 * De-selects many entities in the store by entity keys
 */
class DeselectManyByKeys extends EntityAction {
    constructor(type, entitiesKeys, correlationId) {
        super(type, EntityActionTypes.DeselectManyByKeys, correlationId);
        this.entitiesKeys = entitiesKeys;
        if (!Array.isArray(entitiesKeys)) {
            throw new Error('[NGRX-AE] ! DeselectManyByKeys action requires an array of entity keys.');
        }
    }
}
/**
 * De-selects all entities in the store
 */
class DeselectAll extends EntityAction {
    constructor(type, correlationId) {
        super(type, EntityActionTypes.DeselectAll, correlationId);
    }
}
/**
 * Indicates the de-selection of a single entity in the store
 */
class Deselected extends EntityAction {
    constructor(type, correlationId) {
        super(type, EntityActionTypes.Deselected, correlationId);
    }
}
/**
 * Indicates the de-selection of many entities in the store
 */
class DeselectedMany extends EntityAction {
    constructor(type, entities, correlationId) {
        super(type, EntityActionTypes.DeselectedMany, correlationId);
        this.entities = entities;
        if (!Array.isArray(entities) && entities !== null) {
            throw new Error('[NGRX-AE] ! DeselectedMany action requires an array of entities or keys.');
        }
    }
}

/**
 * Tracks a new entity as being edited in the store
 */
class EditNew extends EntityAction {
    constructor(type, entity, correlationId) {
        super(type, EntityActionTypes.EditNew, correlationId);
        this.entity = entity;
    }
}
/**
 * Tracks an entity as being edited in the store
 */
class Edit extends EntityAction {
    constructor(type, entity, correlationId) {
        super(type, EntityActionTypes.Edit, correlationId);
        this.entity = entity;
    }
}
/**
 * Tracks an entity (by its key) as being edited in the store
 */
class EditByKey extends EntityAction {
    constructor(type, key, correlationId) {
        super(type, EntityActionTypes.EditByKey, correlationId);
        this.key = key;
    }
}
/**
 * Indicates an entity is being tracked as edited in the store
 */
class Edited extends EntityAction {
    constructor(type, entity, correlationId) {
        super(type, EntityActionTypes.Edited, correlationId);
        this.entity = entity;
    }
}
/**
 * Indicates an entity (by its key) is being tracked as edited in the store
 */
class EditedByKey extends EntityAction {
    constructor(type, key, correlationId) {
        super(type, EntityActionTypes.EditedByKey, correlationId);
        this.key = key;
    }
}
/**
 * Indicates a change is occurring to the edited entity in the store
 */
class Change extends EntityAction {
    constructor(type, entity, correlationId) {
        super(type, EntityActionTypes.Change, correlationId);
        this.entity = entity;
    }
}
/**
 * Indicates a change has occurred to the edited entity in the store
 */
class Changed extends EntityAction {
    constructor(type, entity, correlationId) {
        super(type, EntityActionTypes.Changed, correlationId);
        this.entity = entity;
    }
}
/**
 * Ends editing of currently edited entity and clears it from state
 */
class EndEdit extends EntityAction {
    constructor(type, correlationId) {
        super(type, EntityActionTypes.EndEdit, correlationId);
    }
}
/**
 * Indicates editing of currently edited entity has ended
 */
class EditEnded extends EntityAction {
    constructor(type, correlationId) {
        super(type, EntityActionTypes.EditEnded, correlationId);
    }
}

/**
 * Loads a single instance of an entity if necessary
 * HTTP GET /entity/:id operation
 *
 * @remarks:
 * This action will only load the entity if it does not exist in state, referenced by key
 * This is an alternative initiation action that will ultimately result in Load being dispatched
 *
 * @param type - The entity model decorated with @Entity
 * @param keys - (optional) The keys of the entity you wish to load
 * @param maxAge - (optional) The max age of the entity, after which load will be performed regardless
 * @param criteria - (optional) The custom criteria for this action
 * @param correlationId - (optional) A custom correlation id for this action; Use to correlate subsequent result actions
 */
class LoadIfNecessary extends EntityAction {
    constructor(type, keys, maxAge, criteria, correlationId) {
        super(type, EntityActionTypes.LoadIfNecessary, correlationId);
        this.keys = keys;
        this.maxAge = maxAge;
        this.criteria = criteria;
    }
}
/**
 * Loads a single instance of an entity
 * HTTP GET /entity/:id
 *
 * @remarks
 * The loaded entity will replace any existing entity in state
 *
 * @param type - The entity model decorated with @Entity
 * @param keys - (optional) The keys of the entity you wish to load
 * @param criteria - (optional) The custom criteria for this action
 * @param correlationId - (optional) A custom correlation id for this action; Use to correlate subsequent result actions
 */
class Load extends EntityAction {
    constructor(type, keys, criteria, correlationId) {
        super(type, EntityActionTypes.Load, correlationId);
        this.keys = keys;
        this.criteria = criteria;
    }
}
/**
 * Handles a successful response for loading an entity
 * HTTP GET /entity/:id
 *
 * @param type - The entity model decorated with @Entity
 * @param entity - The entity that was loaded
 * @param keys - (optional) The keys of the entity you loaded
 * @param criteria - (optional) The custom criteria from the initial load action
 * @param correlationId - (optional) The correlationId for this action; correlates to initial load action
 */
class LoadSuccess extends EntityAction {
    constructor(type, entity, keys, criteria, correlationId) {
        super(type, EntityActionTypes.LoadSuccess, correlationId);
        this.entity = entity;
        this.keys = keys;
        this.criteria = criteria;
    }
}
/**
 * Handles an error response when loading an entity
 * HTTP GET /entity/:id
 *
 * @param type - The entity model decorated with @Entity
 * @param error - The error object that was thrown
 * @param keys - The keys of the entity you loaded
 * @param criteria - (optional) The custom criteria from the initial load action
 * @param correlationId - (optional) The correlationId for this action; correlates to initial load action
 */
class LoadFailure extends EntityAction {
    constructor(type, error, keys, criteria, correlationId) {
        super(type, EntityActionTypes.LoadFailure, correlationId);
        this.error = error;
        this.keys = keys;
        this.criteria = criteria;
    }
}

/**
 * Loads all instances of an entity if necessary
 * HTTP GET /entity
 *
 * @remarks:
 * This action will only load the entity if there is no previous loadedAt date or any entities in state
 * This is an alternative initiation action that will ultimately result in Load being dispatched
 *
 * @param type - The entity model decorated with @Entity
 * @param maxAge - (optional) The max age of the entity, after which load will be performed regardless
 * @param criteria - (optional) The custom criteria for this action
 * @param correlationId - (optional) A custom correlation id for this action; Use to correlate subsequent result actions
 */
class LoadAllIfNecessary extends EntityAction {
    constructor(type, maxAge, criteria, correlationId) {
        super(type, EntityActionTypes.LoadAllIfNecessary, correlationId);
        this.maxAge = maxAge;
        this.criteria = criteria;
    }
}
/**
 * Loads all instances of an entity
 * HTTP GET /entity
 *
 * @remarks:
 * Replaces all entities for this model in state.
 *
 * @param type - The entity model decorated with @Entity
 * @param criteria - (optional) The custom criteria for this action
 * @param correlationId - (optional) A custom correlation id for this action; Use to correlate subsequent result actions
 */
class LoadAll extends EntityAction {
    constructor(type, criteria, correlationId) {
        super(type, EntityActionTypes.LoadAll, correlationId);
        this.criteria = criteria;
    }
}
/**
 * Handles a successful response for loading all entities
 * HTTP GET /entity
 *
 * @param type - The entity model decorated with @Entity
 * @param entities - The entities that were loaded
 * @param criteria - (optional) The custom criteria from the initial load all action
 * @param correlationId - (optional) The correlationId for this action; correlates to initial load all action
 */
class LoadAllSuccess extends EntityAction {
    constructor(type, entities, criteria, correlationId) {
        super(type, EntityActionTypes.LoadAllSuccess, correlationId);
        this.entities = entities;
        this.criteria = criteria;
    }
}
/**
 * Handles an error response when loading all entities
 * HTTP GET /entity
 *
 * @param type - The entity model decorated with @Entity
 * @param error - (optional) The error object that was thrown
 * @param criteria - (optional) The custom criteria from the initial load all action
 * @param correlationId - (optional) The correlationId for this action; correlates to initial load all action
 */
class LoadAllFailure extends EntityAction {
    constructor(type, error, criteria, correlationId) {
        super(type, EntityActionTypes.LoadAllFailure, correlationId);
        this.error = error;
        this.criteria = criteria;
    }
}

/**
 * Loads all instances of an entity if necessary
 * HTTP GET /entity
 *
 * @remarks:
 * This action will only load the entity if there is no previous loadedAt date or any entities in state
 * This is an alternative initiation action that will ultimately result in Load being dispatched
 *
 * @param type - The entity model decorated with @Entity
 * @param maxAge - (optional) The max age of the entity, after which load will be performed regardless
 * @param criteria - (optional) The custom criteria for this action
 * @param correlationId - (optional) A custom correlation id for this action; Use to correlate subsequent result actions
 */
class LoadManyIfNecessary extends EntityAction {
    constructor(type, maxAge, criteria, correlationId) {
        super(type, EntityActionTypes.LoadManyIfNecessary, correlationId);
        this.maxAge = maxAge;
        this.criteria = criteria;
    }
}
/**
 * Loads many instances of an entity
 * HTTP GET /entity
 *
 * @remarks:
 * Replaces many entities for this model in state. Loaded entities will be merged into state, updating
 * existing entities (by key) or adding new entities (key not found in state).
 *
 * @param type - The entity model decorated with @Entity
 * @param criteria - (optional) The custom criteria for this action
 * @param correlationId - (optional) A custom correlation id for this action; Use to correlate subsequent result actions
 */
class LoadMany extends EntityAction {
    constructor(type, criteria, correlationId) {
        super(type, EntityActionTypes.LoadMany, correlationId);
        this.criteria = criteria;
    }
}
/**
 * Handles a successful response for loading many entities
 * HTTP GET /entity
 *
 * @param type - The entity model decorated with @Entity
 * @param entities - The entities that were loaded
 * @param criteria - (optional) The custom criteria from the initial load many action
 * @param correlationId - (optional) The correlationId for this action; correlates to initial load many action
 */
class LoadManySuccess extends EntityAction {
    constructor(type, entities, criteria, correlationId) {
        super(type, EntityActionTypes.LoadManySuccess, correlationId);
        this.entities = entities;
        this.criteria = criteria;
    }
}
/**
 * Handles an error response when loading many entities
 * HTTP GET /entity
 *
 * @param type - The entity model decorated with @Entity
 * @param error - (optional) The error object that was thrown
 * @param criteria - (optional) The custom criteria from the initial load many action
 * @param correlationId - (optional) The correlationId for this action; correlates to initial load many action
 */
class LoadManyFailure extends EntityAction {
    constructor(type, error, criteria, correlationId) {
        super(type, EntityActionTypes.LoadManyFailure, correlationId);
        this.error = error;
        this.criteria = criteria;
    }
}

/**
 * Loads instances of a page of entities if necessary
 * HTTP GET /entity?page&size (etc.)
 *
 * @remarks:
 * This action will only load the entity if there is no previous loadedAt date or entities in state,
 * or if the current page information for entities in state does not match the page being loaded
 * This is an alternative initiation action that will ultimately result in Load being dispatched
 *
 * @param type - The entity model decorated with @Entity
 * @param page - The information about the page to load
 * @param maxAge - (optional) The max age of the entity, after which load will be performed regardless
 * @param criteria - (optional) The custom criteria for this action
 * @param correlationId - (optional) A custom correlation id for this action; Use to correlate subsequent result actions
 */
class LoadPageIfNecessary extends EntityAction {
    constructor(type, page, maxAge, criteria, correlationId) {
        super(type, EntityActionTypes.LoadPageIfNecessary, correlationId);
        this.page = page;
        this.maxAge = maxAge;
        this.criteria = criteria;
    }
}
/**
 * Loads a single page of an entity
 * HTTP GET /entity?page&size (etc.)
 *
 * @remarks
 * The loaded page of entities will replace all entities for this model in state
 * Will update the current page info in state
 *
 * @param type - The entity model decorated with @Entity
 * @param page - The information about the page to load
 * @param criteria - (optional) The custom criteria for this action
 * @param correlationId - (optional) A custom correlation id for this action; Use to correlate subsequent result actions
 */
class LoadPage extends EntityAction {
    constructor(type, page, criteria, correlationId) {
        super(type, EntityActionTypes.LoadPage, correlationId);
        this.page = page;
        this.criteria = criteria;
    }
}
/**
 * Handles a successful response for loading a page of entities
 * HTTP GET /entity?page&size (etc.)
 *
 * @param type - The entity model decorated with @Entity
 * @param entities - The entities that were loaded
 * @param pageInfo - The information about the page loaded
 * @param criteria - (optional) The custom criteria from the initial load page action
 * @param correlationId - (optional) The correlationId for this action; correlates to initial load page action
 */
class LoadPageSuccess extends EntityAction {
    constructor(type, entities, pageInfo, criteria, correlationId) {
        super(type, EntityActionTypes.LoadPageSuccess, correlationId);
        this.entities = entities;
        this.pageInfo = pageInfo;
        this.criteria = criteria;
    }
}
/**
 * Handles an error response when loading a page of entities
 * HTTP GET /entity?page&size (etc.)
 *
 * @param type - The entity model decorated with @Entity
 * @param error - The error object that was thrown
 * @param page - The page you tried to load
 * @param criteria - (optional) The custom criteria from the initial load page action
 * @param correlationId - (optional) The correlationId for this action; correlates to initial load page action
 */
class LoadPageFailure extends EntityAction {
    constructor(type, error, page, criteria, correlationId) {
        super(type, EntityActionTypes.LoadPageFailure, correlationId);
        this.error = error;
        this.page = page;
        this.criteria = criteria;
    }
}

/**
 * Loads instances of a range of entities if necessary
 * HTTP GET /entity?start&end|first&last|skip&take (etc.)
 *
 * @remarks:
 * This action will only load the entity if there is no previous loadedAt date or entities in state,
 * or if the current range information for entities in state does not intersect the range being loaded
 * This is an alternative initiation action that will ultimately result in Load being dispatched
 *
 * @param type - The entity model decorated with @Entity
 * @param range - The information about the range to load
 * @param maxAge - (optional) The max age of the entity, after which load will be performed regardless
 * @param criteria - (optional) The custom criteria for this action
 * @param correlationId - (optional) A custom correlation id for this action; Use to correlate subsequent result actions
 */
class LoadRangeIfNecessary extends EntityAction {
    constructor(type, range, maxAge, criteria, correlationId) {
        super(type, EntityActionTypes.LoadRangeIfNecessary, correlationId);
        this.range = range;
        this.maxAge = maxAge;
        this.criteria = criteria;
    }
}
/**
 * Loads instances of a range of entities
 * HTTP GET /entity?start&end|first&last|skip&take (etc.)
 *
 * @remarks:
 * The loaded entities will be added to any range of entities already in state
 * Will update the current range info in state
 *
 * @param type - The entity model decorated with @Entity
 * @param range - The information about the range to load
 * @param maxAge - (optional) The max age of the entity, after which load will be performed regardless
 * @param criteria - (optional) The custom criteria for this action
 * @param correlationId - (optional) A custom correlation id for this action; Use to correlate subsequent result actions
 */
class LoadRange extends EntityAction {
    constructor(type, range, criteria, correlationId) {
        super(type, EntityActionTypes.LoadRange, correlationId);
        this.range = range;
        this.criteria = criteria;
    }
}
/**
 * Handles a successful response for loading a range of entities
 * HTTP GET /entity?start&end|first&last|skip&take (etc.)
 *
 * @param type - The entity model decorated with @Entity
 * @param entities - The entities that were loaded
 * @param rangeInfo - The information about the range loaded
 * @param criteria - (optional) The custom criteria from the initial load range action
 * @param correlationId - (optional) The correlationId for this action; correlates to initial load range action
 */
class LoadRangeSuccess extends EntityAction {
    constructor(type, entities, rangeInfo, criteria, correlationId) {
        super(type, EntityActionTypes.LoadRangeSuccess, correlationId);
        this.entities = entities;
        this.rangeInfo = rangeInfo;
        this.criteria = criteria;
    }
}
/**
 * Handles an error response when loading a page of entities
 * HTTP GET /entity?start&end|first&last|skip&take (etc.)
 *
 * @param type - The entity model decorated with @Entity
 * @param error - The error object that was thrown
 * @param range - The range you tried to load
 * @param criteria - (optional) The custom criteria from the initial load range action
 * @param correlationId - (optional) The correlationId for this action; correlates to initial load range action
 */
class LoadRangeFailure extends EntityAction {
    constructor(type, error, range, criteria, correlationId) {
        super(type, EntityActionTypes.LoadRangeFailure, correlationId);
        this.error = error;
        this.range = range;
        this.criteria = criteria;
    }
}

/**
 * Replaces a single entity, corresponding to HTTP PUT operation.
 *
 * PUT: Replace the entity with the one supplied in the request
 */
class Replace extends EntityAction {
    constructor(type, entity, criteria, correlationId) {
        super(type, EntityActionTypes.Replace, correlationId);
        this.entity = entity;
        this.criteria = criteria;
    }
}
class ReplaceSuccess extends EntityAction {
    constructor(type, entity, criteria, correlationId) {
        super(type, EntityActionTypes.ReplaceSuccess, correlationId);
        this.entity = entity;
        this.criteria = criteria;
    }
}
class ReplaceFailure extends EntityAction {
    constructor(type, error, entity, criteria, correlationId) {
        super(type, EntityActionTypes.ReplaceFailure, correlationId);
        this.error = error;
        this.entity = entity;
        this.criteria = criteria;
    }
}
/**
 * Replaces many entities, corresponding to HTTP PUT operation.
 *
 * PUT: Replace the entities with the ones supplied in the request
 */
class ReplaceMany extends EntityAction {
    constructor(type, entities, criteria, correlationId) {
        super(type, EntityActionTypes.ReplaceMany, correlationId);
        this.entities = entities;
        this.criteria = criteria;
    }
}
class ReplaceManySuccess extends EntityAction {
    constructor(type, entities, criteria, correlationId) {
        super(type, EntityActionTypes.ReplaceManySuccess, correlationId);
        this.entities = entities;
        this.criteria = criteria;
    }
}
class ReplaceManyFailure extends EntityAction {
    constructor(type, error, entities, criteria, correlationId) {
        super(type, EntityActionTypes.ReplaceManyFailure, correlationId);
        this.error = error;
        this.entities = entities;
        this.criteria = criteria;
    }
}

/**
 * Selects a single entity in the store by the entity model
 */
class Select extends EntityAction {
    constructor(type, entity, correlationId) {
        super(type, EntityActionTypes.Select, correlationId);
        this.entity = entity;
        if (entity == null) {
            throw new Error('[NGRX-AE] ! SelectByKey requires an entity.');
        }
    }
}
/**
 * Selects a single entity in the store by the entity key
 */
class SelectByKey extends EntityAction {
    constructor(type, entityKey, correlationId) {
        super(type, EntityActionTypes.SelectByKey, correlationId);
        this.entityKey = entityKey;
        if (entityKey == null) {
            throw new Error('[NGRX-AE] ! SelectByKey requires an entity key.');
        }
    }
}
/**
 * Selects many entities in the store by the entity models
 */
class SelectMany extends EntityAction {
    constructor(type, entities, correlationId) {
        super(type, EntityActionTypes.SelectMany, correlationId);
        this.entities = entities;
        if (!Array.isArray(entities)) {
            throw new Error('[NGRX-AE] ! SelectMany action requires an array of entities.');
        }
    }
}
/**
 * Selects more entities in the store by the entity models
 */
class SelectMore extends EntityAction {
    constructor(type, entities, correlationId) {
        super(type, EntityActionTypes.SelectMore, correlationId);
        this.entities = entities;
        if (!Array.isArray(entities)) {
            throw new Error('[NGRX-AE] ! SelectMore action requires an array of entities.');
        }
    }
}
/**
 * Selects many entities in the store by the entity keys
 */
class SelectManyByKeys extends EntityAction {
    constructor(type, entitiesKeys, correlationId) {
        super(type, EntityActionTypes.SelectManyByKeys, correlationId);
        this.entitiesKeys = entitiesKeys;
        if (!Array.isArray(entitiesKeys)) {
            throw new Error('[NGRX-AE] ! SelectManyByKeys action requires an array of entity keys.');
        }
    }
}
/**
 * Selects more entities in the store by the entity keys
 */
class SelectMoreByKeys extends EntityAction {
    constructor(type, entitiesKeys, correlationId) {
        super(type, EntityActionTypes.SelectMoreByKeys, correlationId);
        this.entitiesKeys = entitiesKeys;
        if (!Array.isArray(entitiesKeys)) {
            throw new Error('[NGRX-AE] ! SelectMoreByKeys action requires an array of entity keys.');
        }
    }
}
/**
 * Indicates the selection of a single entity in the store
 */
class Selected extends EntityAction {
    constructor(type, entity, correlationId) {
        super(type, EntityActionTypes.Selected, correlationId);
        this.entity = entity;
    }
}
/**
 * Indicates the selection of many entities in the store
 */
class SelectedMany extends EntityAction {
    constructor(type, entities, correlationId) {
        super(type, EntityActionTypes.SelectedMany, correlationId);
        this.entities = entities;
        if (!Array.isArray(entities)) {
            throw new Error('[NGRX-AE] ! SelectedMany action requires an array of entities or keys.');
        }
    }
}
/**
 * Indicates the selection of more entities in the store
 */
class SelectedMore extends EntityAction {
    constructor(type, entities, correlationId) {
        super(type, EntityActionTypes.SelectedMore, correlationId);
        this.entities = entities;
        if (!Array.isArray(entities)) {
            throw new Error('[NGRX-AE] ! SelectedMore action requires an array of entities or keys.');
        }
    }
}

/**
 * Updates a single entity, corresponding to HTTP PATCH operation.
 *
 * PATCH: Update just the supplied attributes of the entity
 */
class Update extends EntityAction {
    constructor(type, entity, criteria, correlationId) {
        super(type, EntityActionTypes.Update, correlationId);
        this.entity = entity;
        this.criteria = criteria;
    }
}
class UpdateSuccess extends EntityAction {
    constructor(type, entity, criteria, correlationId) {
        super(type, EntityActionTypes.UpdateSuccess, correlationId);
        this.entity = entity;
        this.criteria = criteria;
    }
}
class UpdateFailure extends EntityAction {
    constructor(type, error, entity, criteria, correlationId) {
        super(type, EntityActionTypes.UpdateFailure, correlationId);
        this.error = error;
        this.entity = entity;
        this.criteria = criteria;
    }
}
/**
 * Updates many entities, corresponding to HTTP PATCH operation.
 *
 * PATCH: Update just the supplied attributes of the entities
 */
class UpdateMany extends EntityAction {
    constructor(type, entities, criteria, correlationId) {
        super(type, EntityActionTypes.UpdateMany, correlationId);
        this.entities = entities;
        this.criteria = criteria;
    }
}
class UpdateManySuccess extends EntityAction {
    constructor(type, entities, criteria, correlationId) {
        super(type, EntityActionTypes.UpdateManySuccess, correlationId);
        this.entities = entities;
        this.criteria = criteria;
    }
}
class UpdateManyFailure extends EntityAction {
    constructor(type, error, entities, criteria, correlationId) {
        super(type, EntityActionTypes.UpdateManyFailure, correlationId);
        this.error = error;
        this.entities = entities;
        this.criteria = criteria;
    }
}

/**
 * Updates or inserts a single entity, corresponding to HTTP PUT or POST operation.
 *
 */
class Upsert extends EntityAction {
    constructor(type, entity, criteria, correlationId) {
        super(type, EntityActionTypes.Upsert, correlationId);
        this.entity = entity;
        this.criteria = criteria;
    }
}
class UpsertSuccess extends EntityAction {
    constructor(type, entity, criteria, correlationId) {
        super(type, EntityActionTypes.UpsertSuccess, correlationId);
        this.entity = entity;
        this.criteria = criteria;
    }
}
class UpsertFailure extends EntityAction {
    constructor(type, error, entity, criteria, correlationId) {
        super(type, EntityActionTypes.UpsertFailure, correlationId);
        this.error = error;
        this.entity = entity;
        this.criteria = criteria;
    }
}
/**
 * Updates or inserts many entities, corresponding to HTTP PUT or POST operation.
 *
 */
class UpsertMany extends EntityAction {
    constructor(type, entities, criteria, correlationId) {
        super(type, EntityActionTypes.UpsertMany, correlationId);
        this.entities = entities;
        this.criteria = criteria;
    }
}
class UpsertManySuccess extends EntityAction {
    constructor(type, entities, criteria, correlationId) {
        super(type, EntityActionTypes.UpsertManySuccess, correlationId);
        this.entities = entities;
        this.criteria = criteria;
    }
}
class UpsertManyFailure extends EntityAction {
    constructor(type, error, entities, criteria, correlationId) {
        super(type, EntityActionTypes.UpsertManyFailure, correlationId);
        this.error = error;
        this.entities = entities;
        this.criteria = criteria;
    }
}

const isEntityActionInstance = (action) => action instanceof Load ||
    action instanceof LoadIfNecessary ||
    action instanceof LoadSuccess ||
    action instanceof LoadFailure ||
    action instanceof LoadMany ||
    action instanceof LoadManyIfNecessary ||
    action instanceof LoadManySuccess ||
    action instanceof LoadManyFailure ||
    action instanceof LoadAll ||
    action instanceof LoadAllIfNecessary ||
    action instanceof LoadAllSuccess ||
    action instanceof LoadAllFailure ||
    action instanceof LoadPage ||
    action instanceof LoadPageIfNecessary ||
    action instanceof LoadPageSuccess ||
    action instanceof LoadPageFailure ||
    action instanceof LoadRange ||
    action instanceof LoadRangeIfNecessary ||
    action instanceof LoadRangeSuccess ||
    action instanceof LoadRangeFailure ||
    action instanceof Create ||
    action instanceof CreateSuccess ||
    action instanceof CreateFailure ||
    action instanceof CreateMany ||
    action instanceof CreateManySuccess ||
    action instanceof CreateManyFailure ||
    action instanceof Update ||
    action instanceof UpdateSuccess ||
    action instanceof UpdateFailure ||
    action instanceof UpdateMany ||
    action instanceof UpdateManySuccess ||
    action instanceof UpdateManyFailure ||
    action instanceof Upsert ||
    action instanceof UpsertSuccess ||
    action instanceof UpsertFailure ||
    action instanceof UpsertMany ||
    action instanceof UpsertManySuccess ||
    action instanceof UpsertManyFailure ||
    action instanceof Replace ||
    action instanceof ReplaceSuccess ||
    action instanceof ReplaceFailure ||
    action instanceof ReplaceMany ||
    action instanceof ReplaceManySuccess ||
    action instanceof ReplaceManyFailure ||
    action instanceof Delete ||
    action instanceof DeleteSuccess ||
    action instanceof DeleteFailure ||
    action instanceof DeleteMany ||
    action instanceof DeleteManySuccess ||
    action instanceof DeleteManyFailure ||
    action instanceof DeleteByKey ||
    action instanceof DeleteByKeySuccess ||
    action instanceof DeleteByKeyFailure ||
    action instanceof DeleteManyByKeys ||
    action instanceof DeleteManyByKeysSuccess ||
    action instanceof DeleteManyByKeysFailure ||
    action instanceof Clear ||
    action instanceof Select ||
    action instanceof SelectByKey ||
    action instanceof SelectMany ||
    action instanceof SelectManyByKeys ||
    action instanceof Selected ||
    action instanceof SelectedMany ||
    action instanceof Deselect ||
    action instanceof DeselectMany ||
    action instanceof DeselectManyByKeys ||
    action instanceof DeselectAll ||
    action instanceof Deselected ||
    action instanceof DeselectedMany ||
    action instanceof EditNew ||
    action instanceof Edit ||
    action instanceof EditByKey ||
    action instanceof Edited ||
    action instanceof EditedByKey ||
    action instanceof Change ||
    action instanceof Changed ||
    action instanceof EndEdit ||
    action instanceof EditEnded;

/**
 * Operator to filter actions by an entity action type or multiple action types.
 *
 * @param allowedActionTypes One or more action type string constants
 */
function ofEntityAction(...allowedActionTypes) {
    return filter((action) => {
        return isEntityActionInstance(action) ? allowedActionTypes.some(type => setType(type, action.info) === action.type) : false;
    });
}
/**
 * Operator to filter actions by an entity and action type or multiple action types.
 *
 * @param entity The entity class
 * @param allowedActionTypes One or more action type string constants
 */
function ofEntityType(entity, ...allowedActionTypes) {
    return filter((action) => {
        return isEntityActionInstance(action)
            ? action.info.modelType === entity && allowedActionTypes.some(type => setType(type, action.info) === action.type)
            : false;
    });
}
/**
 * Operator to filter many actions by entity type and entity action types.
 *
 * @param actions$ The NgRx effects Actions stream
 * @param entity The entity types to filter for
 * @param allowedActionTypes The entity actions to filter for
 */
function fromEntityActions(actions$, entity, ...allowedActionTypes) {
    const entityActions = entity.map(e => actions$.pipe(ofEntityType(e, ...allowedActionTypes)));
    return merge(...entityActions);
}

const EMPTY_OBJECT = {};
const getEntity = (entityOrType) => Array.isArray(entityOrType) ? entityOrType[0] : entityOrType;
const ensureObject = value => value || EMPTY_OBJECT;
const getEntityOptions = (entityOrType) => (entityOrType[ENTITY_OPTS_PROP] ||
    (entityOrType.constructor ? entityOrType.constructor[ENTITY_OPTS_PROP] : EMPTY_OBJECT) ||
    EMPTY_OBJECT);
const entityOptions = (entityOrType) => compose(getEntity, ensureObject, getEntityOptions)(entityOrType);
const entityStateName = (modelName) => camelCase(modelName);
const nameOfEntity = (entityOrType) => entityOptions(entityOrType).modelName;
const uriNameOfEntity = (entityOrType) => entityOptions(entityOrType).uriName;
const pluralNameOfEntity = (entityOrType) => entityOptions(entityOrType).pluralName;
const stateNameOfEntity = (entityOrType) => entityStateName(entityOptions(entityOrType).modelName);
const mapComparer = (options, name) => !!options.comparers
    ? typeof options.comparers[name] === 'string'
        ? options.comparers[options.comparers[name]]
        : options.comparers[name]
    : undefined;
const defaultComparer = (options) => options.comparer || mapComparer(options, 'default');
const namedComparer = (options, name) => !!options.comparers
    ? options.comparers[name] || mapComparer(options, name)
    : name === 'default'
        ? defaultComparer(options)
        : undefined;
const getComparer = (options, name) => !!options ? (!!name ? namedComparer(options, name) : defaultComparer(options)) : undefined;
const entityComparer = (entityOrType, name) => getComparer(entityOptions(entityOrType), name);
const entityTransforms = (entityOrType) => entityOptions(entityOrType).transform;
const entityMaxAge = (entityOrType) => entityOptions(entityOrType).defaultMaxAge;

const FEATURE_AFFINITY = '__ngrxae_feature_affinity';

const NGRX_AUTO_ENTITY_APP_STORE = new InjectionToken('@briebug/ngrx-auto-entity App Store');
const getEntityState = (info) => (state) => (info.modelType[FEATURE_AFFINITY]
    ? state[info.modelType[FEATURE_AFFINITY]][entityStateName(info.modelName)]
    : state[entityStateName(info.modelName)]);
const getLoadedAt = (state) => state?.tracking?.loadedAt ?? undefined;
const getIsLoading = (state) => !!state.tracking?.isLoading;
const getCurrentPage = (state) => state.paging?.currentPage ?? undefined;
const getCurrentRange = (state) => state.paging?.currentRange ?? undefined;
const getEntityIds = (state) => state?.ids ?? [];
const mapToHasEntities$1 = (ids) => !!ids && !!ids.length;
const entityLoadedAt = (info) => compose(getEntityState(info), getLoadedAt);
const entityIsLoading = (info) => compose(getEntityState(info), getIsLoading);
const entityCurrentPage = (info) => compose(getEntityState(info), getCurrentPage);
const entityCurrentRange = (info) => compose(getEntityState(info), getCurrentRange);
const entityIds = (info) => compose(getEntityState(info), getEntityIds);
const hasEntitiesLoaded = (info) => compose(getEntityState(info), getEntityIds, mapToHasEntities$1);
const addSeconds = (date, seconds) => new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds() + seconds, date.getMilliseconds());
const nowAfterExpiry = (expiry) => expiry < new Date();
const isSubsequentRange = (a, b) => (a.start || a.first || a.skip + a.take) > (b.end || b.last || b.skip + b.take);
const warnIfMissingStore = () => !warnIfMissingStore.lastWarnTime || Math.abs(new Date(warnIfMissingStore.lastWarnTime).valueOf() - new Date(Date.now()).valueOf()) > 15000
    ? (console.warn(
    // eslint-disable-next-line max-len
    '[NGRX-AE] Warning! The NGRX_AUTO_ENTITY_APP_STORE provider has not been configured! *IfNecessary actions require accessing your store in order to function properly!'),
        (warnIfMissingStore.lastWarnTime = Date.now()),
        void 0)
    : void 0;
const warnMissingStore = () => pipe(tap$1(([, store]) => (!store ? warnIfMissingStore() : null)));
const getAppStore = (injector) => pipe(mergeMap((action) => {
    try {
        const store = injector.get(NGRX_AUTO_ENTITY_APP_STORE);
        return of({ action, store });
    }
    catch {
        warnIfMissingStore();
        return of({ action, store: undefined });
    }
}), filter(({ store }) => !!store));

class EntityIfNecessaryOperators {
    constructor(injector) {
        this.injector = injector;
    }
    loadIfNecessary() {
        return (source) => source.pipe(getAppStore(this.injector), mergeMap(({ action: { info, keys, maxAge, criteria, correlationId }, store }) => combineLatest([
            store.pipe(select(entityLoadedAt(info)), take(1)),
            store.pipe(select(entityIsLoading(info)), take(1)),
            store.pipe(select(hasEntitiesLoaded(info)), take(1)),
            of(info.defaultMaxAge),
            store.pipe(select(entityIds(info)), take(1))
        ]).pipe(map$1(([loadedAt, isLoading, hasEntities, defaultMaxAge, ids]) => ({
            loadedAt,
            isLoading,
            hasEntities,
            defaultMaxAge,
            missing: !loadedAt || !hasEntities || (!!ids && ids.indexOf(keys) === -1),
            checkAge: !!defaultMaxAge || !!maxAge
        })), filter(({ isLoading, missing, checkAge, loadedAt, defaultMaxAge }) => !isLoading && (missing || (checkAge ? nowAfterExpiry(addSeconds(new Date(loadedAt), maxAge || defaultMaxAge)) : missing))), map$1(() => new Load(info.modelType, keys, criteria, correlationId)))));
    }
    loadAllIfNecessary() {
        return (source) => source.pipe(getAppStore(this.injector), mergeMap(({ action: { info, maxAge, criteria, correlationId }, store }) => combineLatest([
            store.pipe(select(entityLoadedAt(info)), take(1)),
            store.pipe(select(entityIsLoading(info)), take(1)),
            store.pipe(select(hasEntitiesLoaded(info)), take(1)),
            of(info.defaultMaxAge)
        ]).pipe(map$1(([loadedAt, isLoading, hasEntities, defaultMaxAge]) => ({
            loadedAt,
            isLoading,
            hasEntities,
            defaultMaxAge,
            missing: !loadedAt || !hasEntities,
            checkAge: !!defaultMaxAge || !!maxAge
        })), filter(({ isLoading, missing, checkAge, loadedAt, defaultMaxAge }) => !isLoading &&
            (missing || (checkAge ? nowAfterExpiry(addSeconds(new Date(loadedAt), maxAge || defaultMaxAge)) : missing))), map$1(() => new LoadAll(info.modelType, criteria, correlationId)))));
    }
    loadManyIfNecessary() {
        return (source) => source.pipe(getAppStore(this.injector), mergeMap(({ action: { info, maxAge, criteria, correlationId }, store }) => combineLatest([
            store.pipe(select(entityLoadedAt(info)), take(1)),
            store.pipe(select(entityIsLoading(info)), take(1)),
            store.pipe(select(hasEntitiesLoaded(info)), take(1)),
            of(info.defaultMaxAge)
        ]).pipe(map$1(([loadedAt, isLoading, hasEntities, defaultMaxAge]) => ({
            loadedAt,
            isLoading,
            hasEntities,
            defaultMaxAge,
            missing: !loadedAt || !hasEntities,
            checkAge: !!defaultMaxAge || !!maxAge
        })), filter(({ isLoading, missing, checkAge, loadedAt, defaultMaxAge }) => !isLoading && (missing || (checkAge ? nowAfterExpiry(addSeconds(new Date(loadedAt), maxAge || defaultMaxAge)) : missing))), map$1(() => new LoadMany(info.modelType, criteria, correlationId)))));
    }
    loadPageIfNecessary() {
        return (source) => source.pipe(getAppStore(this.injector), mergeMap(({ action: { info, page, maxAge, criteria, correlationId }, store }) => combineLatest([
            store.pipe(select(entityLoadedAt(info)), take(1)),
            store.pipe(select(entityIsLoading(info)), take(1)),
            store.pipe(select(hasEntitiesLoaded(info)), take(1)),
            of(info.defaultMaxAge),
            store.pipe(select(entityCurrentPage(info)), take(1))
        ]).pipe(map$1(([loadedAt, isLoading, hasEntities, defaultMaxAge, currentPage]) => ({
            loadedAt,
            isLoading,
            hasEntities,
            defaultMaxAge,
            missing: !loadedAt || !hasEntities,
            samePage: page.page === currentPage.page,
            checkAge: !!defaultMaxAge || !!maxAge
        })), filter(({ isLoading, missing, samePage, checkAge, loadedAt, defaultMaxAge }) => !isLoading &&
            (missing || !samePage || (checkAge ? nowAfterExpiry(addSeconds(new Date(loadedAt), maxAge || defaultMaxAge)) : missing))), map$1(() => new LoadPage(info.modelType, page, criteria, correlationId)))));
    }
    loadRangeIfNecessary() {
        return (source) => source.pipe(getAppStore(this.injector), mergeMap(({ action: { info, range, maxAge, criteria, correlationId }, store }) => combineLatest([
            store.pipe(select(entityLoadedAt(info)), take(1)),
            store.pipe(select(entityIsLoading(info)), take(1)),
            store.pipe(select(hasEntitiesLoaded(info)), take(1)),
            of(info.defaultMaxAge),
            store.pipe(select(entityCurrentRange(info)), take(1))
        ]).pipe(map$1(([loadedAt, isLoading, hasEntities, defaultMaxAge, currentRange]) => ({
            loadedAt,
            isLoading,
            hasEntities,
            defaultMaxAge,
            missing: !loadedAt || !hasEntities,
            nonFollowingRange: !isSubsequentRange(range, currentRange),
            checkAge: !!defaultMaxAge || !!maxAge
        })), filter(({ isLoading, missing, nonFollowingRange, checkAge, loadedAt, defaultMaxAge }) => !isLoading &&
            (missing ||
                !nonFollowingRange ||
                (checkAge ? nowAfterExpiry(addSeconds(new Date(loadedAt), maxAge || defaultMaxAge)) : missing))), map$1(() => new LoadRange(info.modelType, range, criteria, correlationId)))));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: EntityIfNecessaryOperators, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: EntityIfNecessaryOperators }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: EntityIfNecessaryOperators, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i0.Injector }] });

/**
 * Operator that determines if an effect should run for the given model type and action.
 */
const shouldApplyEffect = () => (source) => source.pipe(filter(({ actionType, info }) => !((info.modelType[ENTITY_OPTS_PROP] || {}).excludeEffects || {})[actionType]));

const notImplemented = (method, entityInfo) => `Entity service method "${method}" has not been implemented. (Entity: ${entityInfo.modelName})`;
const notAFunction = (method, entityInfo) => `Entity service method "${method}" is not a function. (Entity: ${entityInfo.modelName})`;
const logAndThrow = (method, err, entityInfo) => {
    console.error(`[NGRX-AE] ! Service error: ${method}(). (Entity: ${entityInfo.modelName})`);
    console.error(err);
    return throwError$1({ info: entityInfo, err });
};
const logServiceLocateFailure = (entityInfo, serviceName) => console.error(`[NGRX-AE] ! Error: Unable to locate entity service for model "${entityInfo.modelName}"`);
const logErrorDetails = (error) => console.error(`[NGRX-AE] ! Error Details:`, error);

const failResolution = (error, entityInfo) => {
    logServiceLocateFailure(entityInfo);
    logErrorDetails(error);
    throw error;
};
const resolveService = (entityInfo, injector) => {
    return injector.get(entityInfo.modelType);
};
const resolveServiceDeep = (entityInfo, injector, remaining) => {
    try {
        return resolveService(entityInfo, injector);
    }
    catch (err) {
        if (remaining.length) {
            const [first, ...rest] = remaining;
            return resolveServiceDeep(entityInfo, first, rest);
        }
        else {
            throw failResolution(err, entityInfo);
        }
    }
};

let INJECTORS = Object.freeze([]);
const getInjectors = () => INJECTORS;
const resetInjectors = () => (INJECTORS = Object.freeze([]));
const getService = (entityInfo, injector) => resolveServiceDeep(entityInfo, injector, [...INJECTORS]);
const prepend = (first, rest) => Object.freeze([first, ...rest]);
const addInjector = (injector) => {
    INJECTORS = prepend(injector, INJECTORS);
};

const invokeService = (method, entityInfo, invoke, toResult, service) => !service[method]
    ? throwError$1({ info: entityInfo, message: notImplemented(method, entityInfo) })
    : typeof service[method] !== 'function'
        ? throwError$1({ info: entityInfo, message: notAFunction(method, entityInfo) })
        : invoke(service).pipe(map$1(toResult), catchError(err => throwError$1({ info: entityInfo, err })));
const callService = (method, entityInfo, injector, invoke, toResult) => {
    try {
        const service = getService(entityInfo, injector);
        return invokeService(method, entityInfo, invoke, toResult, service);
    }
    catch (err) {
        return logAndThrow(method, err, entityInfo);
    }
};

const FROM = 'fromServer';
const TO = 'toServer';
const identity = value => value;
const getTransforms = (transform, prop) => !!transform && !!transform.length
    ? transform.filter(tx => !!tx[prop]).map(tx => tx[prop]) // select custom transformations
    : [identity]; // provide identity transformation as default
const applyTransforms = (transforms, criteria) => (originalEntity) => transforms.reduce((entity, transform) => transform(entity, criteria), { ...originalEntity });
const transformSingleFromServer = (entityInfo, criteria) => (entity) => {
    const transforms = getTransforms(entityInfo.transform, FROM);
    return applyTransforms(transforms, criteria)(entity);
};
const transformArrayFromServer = (entityInfo, criteria) => (entities) => {
    const transforms = getTransforms(entityInfo.transform, FROM);
    return entities.map(applyTransforms(transforms, criteria));
};
const transformSingleToServer = (entityInfo, criteria) => (originalEntity) => {
    const transforms = getTransforms(entityInfo.transform, TO).reverse();
    return applyTransforms(transforms, criteria)(originalEntity);
};
const transformArrayToServer = (entityInfo, criteria) => (entities) => {
    const transforms = getTransforms(entityInfo.transform, TO).reverse();
    return entities.map(applyTransforms(transforms, criteria));
};
// User utilities
const transformEntityFromServer = (entityInfo, entity, criteria) => transformSingleFromServer(entityInfo, criteria)(entity);
const transformEntitiesFromServer = (entityInfo, entities, criteria) => transformArrayFromServer(entityInfo, criteria)(entities);
const transformEntityToServer = (entityInfo, entity, criteria) => transformSingleToServer(entityInfo, criteria)(entity);
const transformEntitiesToServer = (entityInfo, entities, criteria) => transformArrayToServer(entityInfo, criteria)(entities);

/**
 * Looks up client-provided entity service class using Angular's injector and this package's naming
 * conventions.  Then calls client's service and provides success/failure handling.
 */
class NgrxAutoEntityService {
    constructor(injector) {
        this.injector = injector;
    }
    load(entityInfo, keys, criteria) {
        return callService('load', entityInfo, this.injector, service => service.load(entityInfo, keys, criteria), entity => ({ info: entityInfo, entity: transformSingleFromServer(entityInfo, criteria)(entity) }));
    }
    loadAll(entityInfo, criteria) {
        return callService('loadAll', entityInfo, this.injector, service => service.loadAll(entityInfo, criteria), entities => ({ info: entityInfo, entity: transformArrayFromServer(entityInfo, criteria)(entities) }));
    }
    loadMany(entityInfo, criteria) {
        return callService('loadMany', entityInfo, this.injector, service => service.loadMany(entityInfo, criteria), entities => ({ info: entityInfo, entity: transformArrayFromServer(entityInfo, criteria)(entities) }));
    }
    loadPage(entityInfo, page, criteria) {
        return callService('loadPage', entityInfo, this.injector, service => service.loadPage(entityInfo, page, criteria), result => ({
            info: entityInfo,
            pageInfo: result.pageInfo,
            entity: transformArrayFromServer(entityInfo, criteria)(result.entities)
        }));
    }
    loadRange(entityInfo, range, criteria) {
        return callService('loadRange', entityInfo, this.injector, service => service.loadRange(entityInfo, range, criteria), result => ({
            info: entityInfo,
            rangeInfo: result.rangeInfo,
            entity: transformArrayFromServer(entityInfo, criteria)(result.entities)
        }));
    }
    create(entityInfo, entity, criteria) {
        const transformed = transformSingleToServer(entityInfo, criteria)(entity);
        return callService('create', entityInfo, this.injector, service => service.create(entityInfo, transformed, criteria, entity), created => ({ info: entityInfo, entity: transformSingleFromServer(entityInfo, criteria)(created) }));
    }
    createMany(entityInfo, entities, criteria) {
        const transformed = transformArrayToServer(entityInfo, criteria)(entities);
        return callService('createMany', entityInfo, this.injector, service => service.createMany(entityInfo, transformed, criteria, entities), created => ({ info: entityInfo, entity: transformArrayFromServer(entityInfo, criteria)(created) }));
    }
    update(entityInfo, entity, criteria) {
        const transformed = transformSingleToServer(entityInfo, criteria)(entity);
        return callService('update', entityInfo, this.injector, service => service.update(entityInfo, transformed, criteria, entity), updated => ({ info: entityInfo, entity: transformSingleFromServer(entityInfo, criteria)(updated) }));
    }
    updateMany(entityInfo, entities, criteria) {
        const transformed = transformArrayToServer(entityInfo, criteria)(entities);
        return callService('updateMany', entityInfo, this.injector, service => service.updateMany(entityInfo, transformed, criteria, entities), updatedEntities => ({
            info: entityInfo,
            entity: transformArrayFromServer(entityInfo, criteria)(updatedEntities)
        }));
    }
    upsert(entityInfo, entity, criteria) {
        const transformed = transformSingleToServer(entityInfo, criteria)(entity);
        return callService('upsert', entityInfo, this.injector, service => service.upsert(entityInfo, transformed, criteria, entity), upserted => ({ info: entityInfo, entity: transformSingleFromServer(entityInfo, criteria)(upserted) }));
    }
    upsertMany(entityInfo, entities, criteria) {
        const transformed = transformArrayToServer(entityInfo, criteria)(entities);
        return callService('upsertMany', entityInfo, this.injector, service => service.upsertMany(entityInfo, transformed, criteria, entities), upsertedEntities => ({
            info: entityInfo,
            entity: transformArrayFromServer(entityInfo, criteria)(upsertedEntities)
        }));
    }
    replace(entityInfo, entity, criteria) {
        const transformed = transformSingleToServer(entityInfo, criteria)(entity);
        return callService('replace', entityInfo, this.injector, service => service.replace(entityInfo, transformed, criteria, entity), replaced => ({ info: entityInfo, entity: transformSingleFromServer(entityInfo, criteria)(replaced) }));
    }
    replaceMany(entityInfo, entities, criteria) {
        const transformed = transformArrayToServer(entityInfo, criteria)(entities);
        return callService('replaceMany', entityInfo, this.injector, service => service.replaceMany(entityInfo, transformed, criteria, entities), replaced => ({ info: entityInfo, entity: transformArrayFromServer(entityInfo, criteria)(replaced) }));
    }
    delete(entityInfo, entity, criteria) {
        const transformed = transformSingleToServer(entityInfo, criteria)(entity);
        return callService('delete', entityInfo, this.injector, service => service.delete(entityInfo, transformed, criteria, entity), deleted => ({ info: entityInfo, entity: transformSingleFromServer(entityInfo, criteria)(deleted) }));
    }
    deleteMany(entityInfo, entities, criteria) {
        const transformed = transformArrayToServer(entityInfo, criteria)(entities);
        return callService('deleteMany', entityInfo, this.injector, service => service.deleteMany(entityInfo, transformed, criteria, entities), deleted => ({ info: entityInfo, entity: transformArrayFromServer(entityInfo, criteria)(deleted) }));
    }
    deleteByKey(entityInfo, key, criteria) {
        return callService('deleteByKey', entityInfo, this.injector, service => service.deleteByKey(entityInfo, key, criteria), deletedKey => ({ info: entityInfo, entityIdentity: deletedKey }));
    }
    deleteManyByKey(entityInfo, keys, criteria) {
        return callService('deleteManyByKeys', entityInfo, this.injector, service => service.deleteManyByKeys(entityInfo, keys, criteria), deletedKeys => ({ info: entityInfo, entityIdentities: deletedKeys }));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgrxAutoEntityService, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgrxAutoEntityService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgrxAutoEntityService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i0.Injector }] });

const handleError = (error, errorAction, methodName) => {
    if (error.err instanceof TypeError) {
        console.error(`[NGRX-AE] ! NgRxAutoEntityService Error: Unable to locate required method (${methodName}) on the entity service configured for the ${error.info.modelName} entity.`, error.err);
    }
    else if (error.info && error.message) {
        console.error(`[NGRX-AE] ! NgRxAutoEntityService Error: Unable to invoke required operations (${methodName}) on the entity service configured for the ${error.info.modelName} entity.`, error.message);
    }
    else if (error.message) {
        console.error(`[NGRX-AE] ! NgRxAutoEntityService Error: Unable to invoke required operations (${methodName}) on the entity service configured for the ${error.info.modelName} entity.`, error.message);
    }
    else {
        console.error(error);
    }
    return of(errorAction);
};
/**
 * Rxjs operators that are intended to be called by client-defined Effects class
 */
class EntityOperators {
    constructor(entityService) {
        this.entityService = entityService;
    }
    load() {
        return (source) => source.pipe(shouldApplyEffect(), mergeMap(({ info, keys, criteria, correlationId }) => {
            return this.entityService.load(info, keys, criteria).pipe(map$1((ref) => new LoadSuccess(ref.info.modelType, ref.entity, keys, criteria, correlationId)), catchError((error) => handleError(error, new LoadFailure(error.info.modelType, error.err, keys, criteria, correlationId), 'load')));
        }));
    }
    loadMany() {
        return (source) => source.pipe(shouldApplyEffect(), mergeMap(({ info, criteria, correlationId }) => {
            return this.entityService.loadMany(info, criteria).pipe(map$1((ref) => new LoadManySuccess(ref.info.modelType, ref.entity, criteria, correlationId)), catchError((error) => handleError(error, new LoadManyFailure(error.info.modelType, error.err, criteria, correlationId), 'loadMany')));
        }));
    }
    loadAll() {
        return (source) => source.pipe(shouldApplyEffect(), mergeMap(({ info, criteria, correlationId }) => {
            return this.entityService.loadAll(info, criteria).pipe(map$1((ref) => new LoadAllSuccess(ref.info.modelType, ref.entity, criteria, correlationId)), catchError((error) => handleError(error, new LoadAllFailure(error.info.modelType, error.err, criteria, correlationId), 'loadAll')));
        }));
    }
    loadPage() {
        return (source) => source.pipe(shouldApplyEffect(), mergeMap(({ info, page, criteria, correlationId }) => {
            return this.entityService.loadPage(info, page, criteria).pipe(map$1((ref) => new LoadPageSuccess(ref.info.modelType, ref.entity, ref.pageInfo, criteria, correlationId)), catchError((error) => handleError(error, new LoadPageFailure(error.info.modelType, error.err, page, criteria, correlationId), 'loadPage')));
        }));
    }
    loadRange() {
        return (source) => source.pipe(shouldApplyEffect(), mergeMap(({ info, range, criteria, correlationId }) => {
            return this.entityService.loadRange(info, range, criteria).pipe(map$1((ref) => new LoadRangeSuccess(ref.info.modelType, ref.entity, ref.rangeInfo, criteria, correlationId)), catchError((error) => handleError(error, new LoadRangeFailure(error.info.modelType, error.err, range, criteria, correlationId), 'loadRange')));
        }));
    }
    create() {
        return (source) => source.pipe(shouldApplyEffect(), mergeMap(({ info, entity, criteria, correlationId }) => {
            return this.entityService.create(info, entity, criteria).pipe(map$1((ref) => new CreateSuccess(ref.info.modelType, ref.entity, criteria, correlationId)), catchError((error) => handleError(error, new CreateFailure(error.info.modelType, error.err, entity, criteria, correlationId), 'create')));
        }));
    }
    createMany() {
        return (source) => source.pipe(shouldApplyEffect(), mergeMap(({ info, entities, criteria, correlationId }) => {
            return this.entityService.createMany(info, entities, criteria).pipe(map$1((ref) => new CreateManySuccess(ref.info.modelType, ref.entity, criteria, correlationId)), catchError((error) => handleError(error, new CreateManyFailure(error.info.modelType, error.err, entities, criteria, correlationId), 'createMany')));
        }));
    }
    update() {
        return (source) => source.pipe(shouldApplyEffect(), mergeMap(({ info, entity, criteria, correlationId }) => {
            return this.entityService.update(info, entity, criteria).pipe(map$1((ref) => new UpdateSuccess(ref.info.modelType, ref.entity, criteria, correlationId)), catchError((error) => handleError(error, new UpdateFailure(error.info.modelType, error.err, entity, criteria, correlationId), 'update')));
        }));
    }
    updateMany() {
        return (source) => source.pipe(shouldApplyEffect(), mergeMap(({ info, entities, criteria, correlationId }) => {
            return this.entityService.updateMany(info, entities, criteria).pipe(map$1((ref) => new UpdateManySuccess(ref.info.modelType, ref.entity, criteria, correlationId)), catchError((error) => handleError(error, new UpdateManyFailure(error.info.modelType, error.err, entities, criteria, correlationId), 'updateMany')));
        }));
    }
    upsert() {
        return (source) => source.pipe(shouldApplyEffect(), mergeMap(({ info, entity, criteria, correlationId }) => {
            return this.entityService.upsert(info, entity, criteria).pipe(map$1((ref) => new UpsertSuccess(ref.info.modelType, ref.entity, criteria, correlationId)), catchError((error) => handleError(error, new UpsertFailure(error.info.modelType, error.err, entity, criteria, correlationId), 'upsert')));
        }));
    }
    upsertMany() {
        return (source) => source.pipe(shouldApplyEffect(), mergeMap(({ info, entities, criteria, correlationId }) => {
            return this.entityService.upsertMany(info, entities, criteria).pipe(map$1((ref) => new UpsertManySuccess(ref.info.modelType, ref.entity, criteria, correlationId)), catchError((error) => handleError(error, new UpsertManyFailure(error.info.modelType, error.err, entities, criteria, correlationId), 'upsertMany')));
        }));
    }
    replace() {
        return (source) => source.pipe(shouldApplyEffect(), mergeMap(({ info, entity, criteria, correlationId }) => {
            return this.entityService.replace(info, entity, criteria).pipe(map$1((ref) => new ReplaceSuccess(ref.info.modelType, ref.entity, criteria, correlationId)), catchError((error) => handleError(error, new ReplaceFailure(error.info.modelType, error.err, entity, criteria, correlationId), 'replace')));
        }));
    }
    replaceMany() {
        return (source) => source.pipe(shouldApplyEffect(), mergeMap(({ info, entities, criteria, correlationId }) => {
            return this.entityService.replaceMany(info, entities, criteria).pipe(map$1((ref) => new ReplaceManySuccess(ref.info.modelType, ref.entity, criteria, correlationId)), catchError((error) => handleError(error, new ReplaceManyFailure(error.info.modelType, error.err, entities, criteria, correlationId), 'replaceMany')));
        }));
    }
    delete() {
        return (source) => source.pipe(shouldApplyEffect(), mergeMap(({ info, entity, criteria, correlationId }) => {
            return this.entityService.delete(info, entity, criteria).pipe(map$1((ref) => new DeleteSuccess(ref.info.modelType, ref.entity, criteria, correlationId)), catchError((error) => handleError(error, new DeleteFailure(error.info.modelType, error.err, entity, criteria, correlationId), 'delete')));
        }));
    }
    deleteMany() {
        return (source) => source.pipe(shouldApplyEffect(), mergeMap(({ info, entities, criteria, correlationId }) => {
            return this.entityService.deleteMany(info, entities, criteria).pipe(map$1((ref) => new DeleteManySuccess(ref.info.modelType, ref.entity, criteria, correlationId)), catchError((error) => handleError(error, new DeleteManyFailure(error.info.modelType, error.err, entities, criteria, correlationId), 'deleteMany')));
        }));
    }
    deleteByKey() {
        return (source) => source.pipe(shouldApplyEffect(), mergeMap(({ info, key, criteria, correlationId }) => {
            return this.entityService.deleteByKey(info, key, criteria).pipe(map$1((ref) => new DeleteByKeySuccess(ref.info.modelType, ref.entityIdentity, criteria, correlationId)), catchError((error) => handleError(error, new DeleteByKeyFailure(error.info.modelType, error.err, key, criteria, correlationId), 'deleteByKey')));
        }));
    }
    deleteManyByKey() {
        return (source) => source.pipe(shouldApplyEffect(), mergeMap(({ info, keys, criteria, correlationId }) => {
            return this.entityService.deleteManyByKey(info, keys, criteria).pipe(map$1((ref) => new DeleteManyByKeysSuccess(ref.info.modelType, ref.entityIdentities, criteria, correlationId)), catchError((error) => handleError(error, new DeleteManyByKeysFailure(error.info.modelType, error.err, keys, criteria, correlationId), 'deleteManyByKey')));
        }));
    }
    select() {
        return (source) => source.pipe(shouldApplyEffect(), map$1(({ info, entity, correlationId }) => new Selected(info.modelType, entity, correlationId)));
    }
    selectByKey() {
        return (source) => source.pipe(shouldApplyEffect(), map$1(({ info, entityKey, correlationId }) => new Selected(info.modelType, entityKey, correlationId)));
    }
    selectMany() {
        return (source) => source.pipe(shouldApplyEffect(), map$1(({ info, entities, correlationId }) => new SelectedMany(info.modelType, entities, correlationId)));
    }
    selectMore() {
        return (source) => source.pipe(shouldApplyEffect(), map$1(({ info, entities, correlationId }) => new SelectedMore(info.modelType, entities, correlationId)));
    }
    selectManyByKeys() {
        return (source) => source.pipe(shouldApplyEffect(), map$1(({ info, entitiesKeys, correlationId }) => new SelectedMany(info.modelType, entitiesKeys, correlationId)));
    }
    selectMoreByKeys() {
        return (source) => source.pipe(shouldApplyEffect(), map$1(({ info, entitiesKeys, correlationId }) => new SelectedMore(info.modelType, entitiesKeys, correlationId)));
    }
    deselect() {
        return (source) => source.pipe(shouldApplyEffect(), map$1(({ info, correlationId }) => new Deselected(info.modelType, correlationId)));
    }
    deselectMany() {
        return (source) => source.pipe(shouldApplyEffect(), map$1(({ info, entities, correlationId }) => new DeselectedMany(info.modelType, entities, correlationId)));
    }
    deselectManyByKeys() {
        return (source) => source.pipe(shouldApplyEffect(), map$1(({ info, entitiesKeys, correlationId }) => new DeselectedMany(info.modelType, entitiesKeys, correlationId)));
    }
    deselectAll() {
        return (source) => source.pipe(shouldApplyEffect(), map$1(({ info, correlationId }) => new DeselectedMany(info.modelType, null, correlationId)));
    }
    editNew() {
        return (source) => source.pipe(shouldApplyEffect(), map$1(({ info, entity, correlationId }) => new Edited(info.modelType, entity, correlationId)));
    }
    edit() {
        return (source) => source.pipe(shouldApplyEffect(), map$1(({ info, entity, correlationId }) => new Edited(info.modelType, entity, correlationId)));
    }
    editByKey() {
        return (source) => source.pipe(shouldApplyEffect(), map$1(({ info, key, correlationId }) => new EditedByKey(info.modelType, key, correlationId)));
    }
    change() {
        return (source) => source.pipe(shouldApplyEffect(), map$1(({ info, entity, correlationId }) => new Changed(info.modelType, entity, correlationId)));
    }
    endEdit() {
        return (source) => source.pipe(shouldApplyEffect(), map$1(({ info, correlationId }) => new EditEnded(info.modelType, correlationId)));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: EntityOperators, deps: [{ token: NgrxAutoEntityService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: EntityOperators }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: EntityOperators, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: NgrxAutoEntityService }] });

/**
 * Fully-featured entity effects class that provides all standard
 * effect handling for all CURDL operations.
 */
class EntityEffects {
    constructor(actions$, ops, ifnOps) {
        this.actions$ = actions$;
        this.ops = ops;
        this.ifnOps = ifnOps;
        this.load$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Load), this.ops.load()));
        this.loadIfNecessary$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadIfNecessary), this.ifnOps.loadIfNecessary()));
        this.loadAll$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadAll), this.ops.loadAll()));
        this.loadAllIfNecessary$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadAllIfNecessary), this.ifnOps.loadAllIfNecessary()));
        this.loadMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadMany), this.ops.loadMany()));
        this.loadManyIfNecessary$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadManyIfNecessary), this.ifnOps.loadManyIfNecessary()));
        this.loadPage$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadPage), this.ops.loadPage()));
        this.loadPageIfNecessary$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadPageIfNecessary), this.ifnOps.loadPageIfNecessary()));
        this.loadRange$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadRange), this.ops.loadRange()));
        this.loadRangeIfNecessary$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadRangeIfNecessary), this.ifnOps.loadRangeIfNecessary()));
        this.create$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Create), this.ops.create()));
        this.createMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.CreateMany), this.ops.createMany()));
        this.update$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Update), this.ops.update()));
        this.updateMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.UpdateMany), this.ops.updateMany()));
        this.upsert$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Upsert), this.ops.upsert()));
        this.upsertMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.UpsertMany), this.ops.upsertMany()));
        this.replace$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Replace), this.ops.replace()));
        this.replaceMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.ReplaceMany), this.ops.replaceMany()));
        this.delete$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Delete), this.ops.delete()));
        this.deleteMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.DeleteMany), this.ops.deleteMany()));
        this.deleteByKey$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.DeleteByKey), this.ops.deleteByKey()));
        this.deleteManyByKeys$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.DeleteManyByKeys), this.ops.deleteManyByKey()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: EntityEffects, deps: [{ token: i1.Actions }, { token: EntityOperators }, { token: EntityIfNecessaryOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: EntityEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: EntityEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: EntityOperators }, { type: EntityIfNecessaryOperators }] });

class ExtraEffects {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.select$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Select), this.ops.select()));
        this.selectByKey$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.SelectByKey), this.ops.selectByKey()));
        this.selectMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.SelectMany), this.ops.selectMany()));
        this.selectMore$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.SelectMore), this.ops.selectMore()));
        this.selectManyByKeys$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.SelectManyByKeys), this.ops.selectManyByKeys()));
        this.selectMoreByKeys$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.SelectMoreByKeys), this.ops.selectMoreByKeys()));
        this.deselect$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Deselect), this.ops.deselect()));
        this.deselectMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.DeselectMany), this.ops.deselectMany()));
        this.deselectManyByKeys$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.DeselectManyByKeys), this.ops.deselectManyByKeys()));
        this.deselectAll$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.DeselectAll), this.ops.deselectAll()));
        this.editNew$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.EditNew), this.ops.editNew()));
        this.edit$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Edit), this.ops.edit()));
        this.editByKey$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.EditByKey), this.ops.editByKey()));
        this.change$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Change), this.ops.change()));
        this.endEdit$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.EndEdit), this.ops.endEdit()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: ExtraEffects, deps: [{ token: i1.Actions }, { token: EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: ExtraEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: ExtraEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: EntityOperators }] });

function stateNameFromAction(action) {
    return camelCase(action.info.modelName);
}
function featureNameFromAction(action) {
    return action.info.modelType[FEATURE_AFFINITY];
}
function setNewState(featureName, stateName, state, newState) {
    const nextState = featureName
        ? { ...state, [featureName]: { ...state[featureName], [stateName]: newState } }
        : { ...state, [stateName]: newState };
    return nextState;
}
const safeGetKey = (action, entity) => compose(map(() => getKey(action, entity)), iif(isUndefined, throwError(
// eslint-disable-next-line max-len
`[NGRX-AE] ! Entity key for \'${action.info.modelName}\' could not be found on this entity instance! Make sure your entity is properly decorated with the necessary key metadata. State will NOT be updated due to misconfiguration of your entity.`), key => key))(null);
const cloneEntities = (original) => (!!original ? { ...original } : {});
const cloneIds = (ids) => (!!ids ? [...ids] : []);
const mergeSingle = (currentEntities, entityKey, newEntity) => ((currentEntities[entityKey] = newEntity), currentEntities);
const mergeMany = (currentEntities, newEntities, action) => newEntities.reduce((entities, entity) => ((entities[safeGetKey(action, entity)] = entity), entities), currentEntities);
const deleteSingle = (currentEntities, entityKey) => (delete currentEntities[entityKey], currentEntities);
const deleteMany = (currentEntities, entityKeys) => (entityKeys.forEach(entityKey => delete currentEntities[entityKey]), currentEntities);
const pushSingle = (currentIds, entityKey) => (currentIds.push(entityKey), currentIds);
const pushMany = (currentIds, newEntities, action) => (currentIds.push.apply(currentIds, newEntities.map(entity => safeGetKey(action, entity))),
    currentIds);
const combineUnique = (currentIds, currentEntities, modifiedEntities, action) => {
    const newIds = modifiedEntities.map(entity => safeGetKey(action, entity)).filter(key => !(key in currentEntities));
    currentIds.push.apply(currentIds, newIds);
    return currentIds;
};
const has = (array, value) => array.indexOf(value) > -1;
const pushIfMissing = (currentEntities, currentIds, entityKey) => entityKey in currentEntities ? noop() : currentIds.push(entityKey);
const pushUnique = (currentEntities, currentIds, entityKey) => (pushIfMissing(currentEntities, currentIds, entityKey), currentIds);
const pushManyUnique = (currentEntities, currentIds, entityKeys) => (entityKeys.forEach(entityKey => pushIfMissing(currentEntities, currentIds, entityKey)), currentIds);
const warnMissingPageInfo = (action) => console.log(
// eslint-disable-next-line max-len
`[NGRX-AE] Page information for '${action.info.modelName}' was not provided! Page info should be returned from your entity service's loadPage() method. State WILL be updated, however the current page and total entity count information will be incorrect.`);
const warnMissingRangeInfo = (action) => console.log(
// eslint-disable-next-line max-len
`[NGRX-AE] Range information for '${action.info.modelName}' was not provided! Range info should be returned from your entity service's loadPage() method. State WILL be updated, however the current page and total entity count information will be incorrect.`);

const clearReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.Clear: {
            const newState = {
                // If the developer has included their own extra state properties with buildState(Entity, { /* custom */ })
                // then we don't want to mess with it. We want to leave any custom developer state as-is!
                // Spread in the current state to ensure we KEEP custom developer-defined extra state properties:
                ...entityState,
                // Now reset the auto-entity managed properties to their default states:
                entities: {},
                ids: [],
                selections: undefined,
                edits: undefined,
                paging: undefined,
                tracking: undefined
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const createManyReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.CreateMany: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isSaving: true
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.CreateManyFailure: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isSaving: false
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.CreateManySuccess: {
            const createdEntities = action.entities;
            const entities = cloneEntities(entityState.entities);
            const ids = cloneIds(entityState.ids);
            const newState = {
                ...entityState,
                entities: mergeMany(entities, createdEntities, action),
                ids: pushMany(ids, createdEntities, action),
                tracking: {
                    ...entityState.tracking,
                    isSaving: false,
                    createdAt: Date.now()
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const createReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.Create: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isSaving: true
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.CreateFailure: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isSaving: false
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.CreateSuccess: {
            const createEntity = action.entity;
            const createKey = safeGetKey(action, createEntity);
            const entities = cloneEntities(entityState.entities);
            const ids = cloneIds(entityState.ids);
            const newState = {
                ...entityState,
                entities: mergeSingle(entities, createKey, createEntity),
                ids: pushSingle(ids, createKey),
                tracking: {
                    ...entityState.tracking,
                    isSaving: false,
                    createdAt: Date.now()
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const deleteByKeyReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.DeleteByKey: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isDeleting: true
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.DeleteByKeyFailure: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isDeleting: false
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.DeleteByKeySuccess: {
            const deleteKey = action.key;
            const clonedEntities = cloneEntities(entityState.entities);
            const entities = deleteSingle(clonedEntities || {}, deleteKey);
            const ids = entityState.ids.filter(eid => eid in entities);
            // Better to NOT delete the entity key, but set it to undefined,
            // to avoid re-generating the underlying runtime class (TODO: find and add link to V8 jit and runtime)
            const newState = {
                ...entityState,
                entities,
                ids,
                tracking: {
                    ...entityState.tracking,
                    isDeleting: false,
                    deletedAt: Date.now()
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const deleteManyByKeysReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.DeleteManyByKeys: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isDeleting: true
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.DeleteManyByKeysFailure: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isDeleting: false
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.DeleteManyByKeysSuccess: {
            const deleteKeys = action.keys;
            const clonedEntities = cloneEntities(entityState.entities);
            const entities = deleteMany(clonedEntities, deleteKeys);
            const ids = entityState.ids.filter(eid => eid in entities);
            const newState = {
                ...entityState,
                entities,
                ids,
                tracking: {
                    ...entityState.tracking,
                    isDeleting: false,
                    deletedAt: Date.now()
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const deleteManyReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.DeleteMany: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isDeleting: true
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.DeleteManyFailure: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isDeleting: false
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.DeleteManySuccess: {
            const deleteManyEntities = action.entities;
            const deletedIds = deleteManyEntities.map(entity => safeGetKey(action, entity));
            const clonedEntities = cloneEntities(entityState.entities);
            const entities = deleteMany(clonedEntities, deletedIds);
            const ids = entityState.ids.filter(eid => eid in entities);
            const newState = {
                ...entityState,
                entities,
                ids,
                tracking: {
                    ...entityState.tracking,
                    isDeleting: false,
                    deletedAt: Date.now()
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const deleteReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.Delete: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isDeleting: true
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.DeleteFailure: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isDeleting: false
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.DeleteSuccess: {
            const deleteEntity = action.entity;
            const deleteKey = safeGetKey(action, deleteEntity);
            const entities = cloneEntities(entityState.entities);
            const ids = entityState.ids.filter(eid => eid !== deleteKey);
            // Better to NOT delete the entity key, but set it to undefined,
            // to avoid re-generating the underlying runtime class (TODO: find and add link to V8 jit and runtime)
            const newState = {
                ...entityState,
                entities: deleteSingle(entities || {}, deleteKey),
                ids,
                tracking: {
                    ...entityState.tracking,
                    isDeleting: false,
                    deletedAt: Date.now()
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const deselectManyReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.DeselectMany: {
            const deselectManyEntities = action.entities || [];
            const deselectingEntities = Array.isArray(deselectManyEntities) ? deselectManyEntities : [];
            const deselectManyEntityKeys = deselectingEntities.map(entity => safeGetKey(action, entity));
            const deselectManyCurrentKeys = entityState.selections.currentEntitiesKeys || [];
            const newState = {
                ...entityState,
                selections: {
                    ...entityState.selections,
                    currentEntitiesKeys: deselectManyCurrentKeys.filter(key => !deselectManyEntityKeys.some(k => k === key))
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.DeselectManyByKeys: {
            const deselectManyByKeysKeys = action.entitiesKeys || [];
            const deselectManyByKeysGuaranteedKeys = Array.isArray(deselectManyByKeysKeys) ? deselectManyByKeysKeys : [];
            const deselectManyByKeysCurrentKeys = entityState.selections.currentEntitiesKeys || [];
            const newState = {
                ...entityState,
                selections: {
                    ...entityState.selections,
                    currentEntitiesKeys: deselectManyByKeysCurrentKeys.filter(key => !deselectManyByKeysGuaranteedKeys.some(k => k === key))
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.DeselectAll: {
            const newState = {
                ...entityState,
                selections: {
                    ...entityState.selections,
                    currentEntitiesKeys: undefined
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const deselectReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.Deselect: {
            const newState = {
                ...entityState,
                selections: {
                    ...entityState.selections,
                    currentEntityKey: undefined
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const editsReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.EditNew: {
            const editEntity = action.entity || {};
            if (!editEntity) {
                return state;
            }
            const newState = {
                ...entityState,
                edits: {
                    editedEntity: { ...editEntity }, // TODO: Figure out a deep clone option here!!
                    isDirty: false
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.Edit: {
            const editEntity = action.entity;
            if (!editEntity) {
                return state;
            }
            const editedKey = safeGetKey(action, editEntity);
            const prevEditedKey = entityState.edits?.editedEntity && getKey(action, entityState.edits.editedEntity);
            if (editedKey === prevEditedKey) {
                return state;
            }
            const newState = {
                ...entityState,
                edits: {
                    editedEntity: { ...editEntity }, // TODO: Figure out a deep clone option here!!
                    isDirty: false
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.EditByKey: {
            const editedKey = action.key;
            const prevEditedKey = entityState.edits?.editedEntity && getKey(action, entityState.edits.editedEntity);
            if (!editedKey || editedKey === prevEditedKey) {
                return state;
            }
            const editEntity = entityState.entities[editedKey];
            if (!editEntity) {
                return state;
            }
            const newState = {
                ...entityState,
                edits: {
                    editedEntity: { ...editEntity }, // TODO: Figure out a deep clone option here!!
                    isDirty: false
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.Change: {
            const changeEntity = action.entity;
            if (!changeEntity || !entityState.edits?.editedEntity) {
                return state;
            }
            const newState = {
                ...entityState,
                edits: {
                    editedEntity: { ...changeEntity }, // TODO: Figure out a deep clone option here!!
                    isDirty: true
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.EndEdit: {
            if (entityState.edits?.editedEntity === undefined) {
                return state;
            }
            const newState = {
                ...entityState,
                edits: {
                    editedEntity: undefined,
                    isDirty: undefined
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const loadAllReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.LoadAll: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isLoading: true
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.LoadAllFailure: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isLoading: false
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.LoadAllSuccess: {
            const loadAllEntities = action.entities;
            const loadedIds = loadAllEntities.map(entity => safeGetKey(action, entity));
            const newState = {
                ...entityState,
                entities: mergeMany({}, loadAllEntities, action),
                ids: loadedIds,
                tracking: {
                    ...entityState.tracking,
                    isLoading: false,
                    loadedAt: Date.now()
                },
                paging: undefined
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const loadManyReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.LoadMany: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isLoading: true
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.LoadManyFailure: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isLoading: false
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.LoadManySuccess: {
            const loadManyEntities = action.entities;
            const loadedIds = loadManyEntities.map(entity => safeGetKey(action, entity));
            const entities = cloneEntities(entityState.entities);
            const ids = cloneIds(entityState.ids);
            const newState = {
                ...entityState,
                ids: pushManyUnique(entities, ids, loadedIds), // ALERT: IDS FIRST!!
                entities: mergeMany(entities, loadManyEntities, action), // ALERT: Then entities!
                tracking: {
                    ...entityState.tracking,
                    isLoading: false,
                    loadedAt: Date.now()
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const loadPageReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.LoadPage: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isLoading: true
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.LoadPageFailure: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isLoading: false
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.LoadPageSuccess: {
            const loadPageEntities = action.entities;
            const loadedIds = loadPageEntities.map(entity => safeGetKey(action, entity));
            const pageInfo = action.pageInfo;
            if (!pageInfo) {
                warnMissingPageInfo(action);
            }
            const newState = {
                ...entityState,
                entities: mergeMany({}, loadPageEntities, action),
                ids: loadedIds,
                paging: {
                    ...entityState.tracking,
                    currentPage: pageInfo.page,
                    totalPageableCount: pageInfo.totalCount
                },
                tracking: {
                    ...entityState.tracking,
                    isLoading: false,
                    loadedAt: Date.now()
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const loadRangeReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.LoadRange: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isLoading: true
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.LoadRangeFailure: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isLoading: false
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.LoadRangeSuccess: {
            const loadRangeEntities = action.entities;
            const entities = cloneEntities(entityState.entities);
            const ids = cloneIds(entityState.ids);
            const rangeInfo = action.rangeInfo;
            if (!rangeInfo) {
                warnMissingRangeInfo(action);
            }
            const newState = {
                ...entityState,
                entities: mergeMany(entities, loadRangeEntities, action),
                ids: pushMany(ids, loadRangeEntities, action),
                tracking: {
                    ...entityState.tracking,
                    isLoading: false,
                    loadedAt: Date.now()
                },
                paging: {
                    ...entityState.paging,
                    currentRange: rangeInfo.range,
                    totalPageableCount: rangeInfo.totalCount
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const loadReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.Load: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isLoading: true
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.LoadFailure: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isLoading: false
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.LoadSuccess: {
            const loadEntity = action.entity;
            const loadKey = safeGetKey(action, loadEntity);
            const entities = cloneEntities(entityState.entities);
            const ids = cloneIds(entityState.ids);
            const newState = {
                ...entityState,
                ids: pushUnique(entities, ids, loadKey), // ALERT: IDS FIRST!!!
                entities: mergeSingle(entities, loadKey, loadEntity), // ALERT: Then entities!
                tracking: {
                    ...entityState.tracking,
                    isLoading: false,
                    loadedAt: Date.now()
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const replaceManyReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.ReplaceMany: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isSaving: true
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.ReplaceManyFailure: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isSaving: false
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.ReplaceManySuccess: {
            const replaceManyEntities = action.entities;
            const entities = cloneEntities(entityState.entities);
            const newState = {
                ...entityState,
                entities: mergeMany(entities, replaceManyEntities, action),
                tracking: {
                    ...entityState.tracking,
                    isSaving: false,
                    savedAt: Date.now(),
                    replacedAt: Date.now()
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const replaceReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.Replace: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isSaving: true
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.ReplaceFailure: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isSaving: false
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.ReplaceSuccess: {
            const replaceEntity = action.entity;
            const replaceKey = safeGetKey(action, replaceEntity);
            const entities = cloneEntities(entityState.entities);
            const newState = {
                ...entityState,
                entities: mergeSingle(entities, replaceKey, replaceEntity),
                tracking: {
                    ...entityState.tracking,
                    isSaving: false,
                    savedAt: Date.now(),
                    replacedAt: Date.now()
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const selectManyReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.SelectMany: {
            const selectManyEntities = action.entities || [];
            const selectingEntities = Array.isArray(selectManyEntities) ? selectManyEntities : [];
            const selectManyKeys = selectingEntities.map(entity => safeGetKey(action, entity));
            const newState = {
                ...entityState,
                selections: {
                    ...(entityState.selections ?? {}),
                    currentEntitiesKeys: selectManyKeys
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.SelectMore: {
            const selectMoreEntities = action.entities || [];
            const selectingEntities = Array.isArray(selectMoreEntities) ? selectMoreEntities : [];
            const selectMoreKeys = selectingEntities.map(entity => safeGetKey(action, entity));
            const selectMoreCurrentKeys = entityState.selections?.currentEntitiesKeys || [];
            const selectMoreCombinedKeys = new Set([...selectMoreCurrentKeys, ...selectMoreKeys]);
            const newState = {
                ...entityState,
                selections: {
                    ...(entityState.selections ?? {}),
                    currentEntitiesKeys: [...selectMoreCombinedKeys]
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.SelectManyByKeys: {
            const selectManyByKeysKeys = action.entitiesKeys || [];
            const selectManyByKeysGuaranteedKeys = Array.isArray(selectManyByKeysKeys) ? selectManyByKeysKeys : [];
            const newState = {
                ...entityState,
                selections: {
                    ...(entityState.selections ?? {}),
                    currentEntitiesKeys: selectManyByKeysGuaranteedKeys
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.SelectMoreByKeys: {
            const selectMoreByKeysKeys = action.entitiesKeys || [];
            const selectMoreByKeysGuaranteedKeys = Array.isArray(selectMoreByKeysKeys) ? selectMoreByKeysKeys : [];
            const selectMoreByKeysCurrentKeys = entityState.selections?.currentEntitiesKeys || [];
            const selectMoreByKeysCombinedKeys = new Set([...selectMoreByKeysCurrentKeys, ...selectMoreByKeysGuaranteedKeys]);
            const newState = {
                ...entityState,
                selections: {
                    ...(entityState.selections ?? {}),
                    currentEntitiesKeys: [...selectMoreByKeysCombinedKeys]
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const selectReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.Select: {
            const selectEntity = action.entity;
            if (!selectEntity) {
                return state;
            }
            const selectKey = safeGetKey(action, selectEntity);
            const newState = {
                ...entityState,
                selections: {
                    ...entityState.selections,
                    currentEntityKey: selectKey
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.SelectByKey: {
            const selectByKeyKey = action.entityKey;
            if (!selectByKeyKey) {
                return state;
            }
            const newState = {
                ...entityState,
                selections: {
                    ...entityState.selections,
                    currentEntityKey: selectByKeyKey
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const updateManyReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.UpdateMany: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isSaving: true
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.UpdateManyFailure: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isSaving: false
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.UpdateManySuccess: {
            const updateManyEntities = action.entities;
            const entities = cloneEntities(entityState.entities);
            const newState = {
                ...entityState,
                entities: mergeMany(entities, updateManyEntities, action),
                tracking: {
                    ...entityState.tracking,
                    isSaving: false,
                    savedAt: Date.now(),
                    updatedAt: Date.now()
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const updateReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.Update: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isSaving: true
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.UpdateFailure: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isSaving: false
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.UpdateSuccess: {
            const updateEntity = action.entity;
            const updateKey = safeGetKey(action, updateEntity);
            const entities = cloneEntities(entityState.entities);
            const newState = {
                ...entityState,
                entities: mergeSingle(entities, updateKey, updateEntity),
                tracking: {
                    ...entityState.tracking,
                    isSaving: false,
                    savedAt: Date.now(),
                    updatedAt: Date.now()
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const upsertManyReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.UpsertMany: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isSaving: true
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.UpsertManyFailure: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isSaving: false
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.UpsertManySuccess: {
            const upsertManyEntities = action.entities;
            const entities = cloneEntities(entityState.entities);
            const ids = cloneIds(entityState.ids);
            const newState = {
                ...entityState,
                ids: combineUnique(ids, entities, upsertManyEntities, action),
                entities: mergeMany(entities, upsertManyEntities, action),
                tracking: {
                    ...entityState.tracking,
                    isSaving: false,
                    savedAt: Date.now()
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const upsertReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.Upsert: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isSaving: true
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.UpsertFailure: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isSaving: false
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.UpsertSuccess: {
            const upsertEntity = action.entity;
            const upsertKey = safeGetKey(action, upsertEntity);
            const entities = cloneEntities(entityState.entities);
            const ids = cloneIds(entityState.ids);
            const newState = {
                ...entityState,
                ids: combineUnique(ids, entities, [upsertEntity], action),
                entities: mergeSingle(entities, upsertKey, upsertEntity),
                tracking: {
                    ...entityState.tracking,
                    isSaving: false,
                    savedAt: Date.now()
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};

const ENTITY_ACTION_REDUCER_MAP = {
    [EntityActionTypes.Create]: createReducer,
    [EntityActionTypes.CreateSuccess]: createReducer,
    [EntityActionTypes.CreateFailure]: createReducer,
    [EntityActionTypes.CreateMany]: createManyReducer,
    [EntityActionTypes.CreateManySuccess]: createManyReducer,
    [EntityActionTypes.CreateManyFailure]: createManyReducer,
    [EntityActionTypes.Update]: updateReducer,
    [EntityActionTypes.UpdateSuccess]: updateReducer,
    [EntityActionTypes.UpdateFailure]: updateReducer,
    [EntityActionTypes.UpdateMany]: updateManyReducer,
    [EntityActionTypes.UpdateManySuccess]: updateManyReducer,
    [EntityActionTypes.UpdateManyFailure]: updateManyReducer,
    [EntityActionTypes.Upsert]: upsertReducer,
    [EntityActionTypes.UpsertSuccess]: upsertReducer,
    [EntityActionTypes.UpsertFailure]: upsertReducer,
    [EntityActionTypes.UpsertMany]: upsertManyReducer,
    [EntityActionTypes.UpsertManySuccess]: upsertManyReducer,
    [EntityActionTypes.UpsertManyFailure]: upsertManyReducer,
    [EntityActionTypes.Replace]: replaceReducer,
    [EntityActionTypes.ReplaceSuccess]: replaceReducer,
    [EntityActionTypes.ReplaceFailure]: replaceReducer,
    [EntityActionTypes.ReplaceMany]: replaceManyReducer,
    [EntityActionTypes.ReplaceManySuccess]: replaceManyReducer,
    [EntityActionTypes.ReplaceManyFailure]: replaceManyReducer,
    [EntityActionTypes.Delete]: deleteReducer,
    [EntityActionTypes.DeleteSuccess]: deleteReducer,
    [EntityActionTypes.DeleteFailure]: deleteReducer,
    [EntityActionTypes.DeleteMany]: deleteManyReducer,
    [EntityActionTypes.DeleteManySuccess]: deleteManyReducer,
    [EntityActionTypes.DeleteManyFailure]: deleteManyReducer,
    [EntityActionTypes.DeleteByKey]: deleteByKeyReducer,
    [EntityActionTypes.DeleteByKeySuccess]: deleteByKeyReducer,
    [EntityActionTypes.DeleteByKeyFailure]: deleteByKeyReducer,
    [EntityActionTypes.DeleteManyByKeys]: deleteManyByKeysReducer,
    [EntityActionTypes.DeleteManyByKeysSuccess]: deleteManyByKeysReducer,
    [EntityActionTypes.DeleteManyByKeysFailure]: deleteManyByKeysReducer,
    [EntityActionTypes.Load]: loadReducer,
    [EntityActionTypes.LoadSuccess]: loadReducer,
    [EntityActionTypes.LoadFailure]: loadReducer,
    [EntityActionTypes.LoadAll]: loadAllReducer,
    [EntityActionTypes.LoadAllSuccess]: loadAllReducer,
    [EntityActionTypes.LoadAllFailure]: loadAllReducer,
    [EntityActionTypes.LoadMany]: loadManyReducer,
    [EntityActionTypes.LoadManySuccess]: loadManyReducer,
    [EntityActionTypes.LoadManyFailure]: loadManyReducer,
    [EntityActionTypes.LoadPage]: loadPageReducer,
    [EntityActionTypes.LoadPageSuccess]: loadPageReducer,
    [EntityActionTypes.LoadPageFailure]: loadPageReducer,
    [EntityActionTypes.LoadRange]: loadRangeReducer,
    [EntityActionTypes.LoadRangeSuccess]: loadRangeReducer,
    [EntityActionTypes.LoadRangeFailure]: loadRangeReducer,
    [EntityActionTypes.Clear]: clearReducer,
    [EntityActionTypes.Select]: selectReducer,
    [EntityActionTypes.SelectByKey]: selectReducer,
    [EntityActionTypes.SelectMany]: selectManyReducer,
    [EntityActionTypes.SelectManyByKeys]: selectManyReducer,
    [EntityActionTypes.SelectMore]: selectManyReducer,
    [EntityActionTypes.SelectMoreByKeys]: selectManyReducer,
    [EntityActionTypes.Deselect]: deselectReducer,
    [EntityActionTypes.DeselectAll]: deselectManyReducer,
    [EntityActionTypes.DeselectMany]: deselectManyReducer,
    [EntityActionTypes.DeselectManyByKeys]: deselectManyReducer,
    [EntityActionTypes.Edit]: editsReducer,
    [EntityActionTypes.EditNew]: editsReducer,
    [EntityActionTypes.EditByKey]: editsReducer,
    [EntityActionTypes.Change]: editsReducer,
    [EntityActionTypes.EndEdit]: editsReducer,
    // Result actions not currently handled by a reducer:
    [EntityActionTypes.LoadIfNecessary]: undefined,
    [EntityActionTypes.LoadAllIfNecessary]: undefined,
    [EntityActionTypes.LoadManyIfNecessary]: undefined,
    [EntityActionTypes.LoadPageIfNecessary]: undefined,
    [EntityActionTypes.LoadRangeIfNecessary]: undefined,
    [EntityActionTypes.Selected]: undefined,
    [EntityActionTypes.SelectedMany]: undefined,
    [EntityActionTypes.SelectedMore]: undefined,
    [EntityActionTypes.Deselected]: undefined,
    [EntityActionTypes.DeselectedMany]: undefined,
    [EntityActionTypes.Edited]: undefined,
    [EntityActionTypes.EditedByKey]: undefined,
    [EntityActionTypes.Changed]: undefined,
    [EntityActionTypes.EditEnded]: undefined
};

const runReducer = (reducer) => (basis) => {
    try {
        return reducer(basis);
    }
    catch (err) {
        if (err.message && err.message.startsWith('[NGRX-AE]')) {
            console.error(err.message);
            return basis.state;
        }
        throw err;
    }
};
const buildReducerParams = () => (params) => ({
    ...params,
    stateName: stateNameFromAction(params.action),
    featureName: featureNameFromAction(params.action)
});
const findEntityState = () => ({ state, action, stateName, featureName }) => ({
    state,
    action,
    stateName,
    featureName,
    entityState: featureName ? state[featureName][stateName] : state[stateName]
});
const defaultReducer = ({ state }) => state;
const findEntityReducer = (action) => ENTITY_ACTION_REDUCER_MAP[action.actionType] ?? defaultReducer;
const applyEntityReducer = () => (params) => runReducer(findEntityReducer(params.action))(params);
const autoEntityReducer = (reducer, state, action) => {
    const nextState = Object.values(EntityActionTypes).includes(action.actionType)
        ? compose(buildReducerParams(), findEntityState(), applyEntityReducer())({ state, action })
        : state;
    return reducer(nextState, action);
};

/**
 * Provides standard reducer functions to support entity store structure
 *
 * @param reducer - The next reducer to be applied
 */
function autoEntityMetaReducer(reducer) {
    return (state, action) => {
        return autoEntityReducer(reducer, state, action);
    };
}

function isAutoEntityFeature(value) {
    return value && value.ɵkind != null && value.ɵproviders != null;
}
function includesFeature(features, featureKind) {
    return features.some(feature => feature.ɵkind === featureKind);
}
function autoEntityFeature(kind, providers) {
    return { ɵkind: kind, ɵproviders: providers };
}
const NGRX_AUTO_ENTITY_CONFIG = new InjectionToken('@briebug/ngrx-auto-entity Config');
const defaultConfig = {};
function getNgRxAutoEntityMetaReducer() {
    return autoEntityMetaReducer;
}
function addNgRxAutoEntityEffects() {
    const config = inject(NGRX_AUTO_ENTITY_CONFIG);
    return () => {
        // NOTE: The following trick learned from @ngrx/data!
        // Warning: this alternative approach relies on an undocumented API
        // to add effect directly rather than through `provideEffects`.
        // The danger is that provideEffects evolves and we no longer perform a crucial step.
        const effectSources = inject(EffectSources);
        const entityEffects = inject(EntityEffects, { optional: config.withoutEntityEffects });
        const extraEffects = inject(ExtraEffects, { optional: config.withoutExtraEffects });
        entityEffects && effectSources.addEffects(entityEffects);
        extraEffects && effectSources.addEffects(extraEffects);
    };
}
/** @internal */
function _provideAutoEntityStore(config = defaultConfig, features = []) {
    const effects = [];
    if (!config.withoutEntityEffects) {
        effects.push(EntityEffects);
    }
    if (!config.withoutExtraEffects) {
        effects.push(ExtraEffects);
    }
    if (!includesFeature(features, 0 /* NgRxAutoEntityFeatureKind.CustomStoreFeature */)) {
        features.push(withCustomStore(() => inject(Store)));
    }
    return [
        NgrxAutoEntityService,
        EntityOperators,
        EntityIfNecessaryOperators,
        ...effects,
        { provide: META_REDUCERS, useFactory: getNgRxAutoEntityMetaReducer, multi: true },
        { provide: NGRX_AUTO_ENTITY_CONFIG, useValue: config },
        { provide: ENVIRONMENT_INITIALIZER, useFactory: addNgRxAutoEntityEffects, multi: true },
        ...features.map((feature) => feature.ɵproviders),
    ];
}
function provideAutoEntityStore(...args) {
    const config = isAutoEntityFeature(args[0]) ? undefined : args.shift();
    const features = args;
    return makeEnvironmentProviders(_provideAutoEntityStore(config, features));
}
let INJECTOR_DEPTH = 0;
function addNgRxAutoEntityInjector() {
    const injector = inject(Injector);
    // Update the core NgRxAutoEntityService INJECTORS to include the current injector
    // This creates a list of injectors that should eventually encompass the entire application
    // as +feature loaded modules are subsequently created, to be evaluated in reverse order
    INJECTOR_DEPTH = INJECTOR_DEPTH + 1;
    addInjector(Injector.create({
        providers: [],
        parent: injector,
        name: 'AutoEntityInjector' + INJECTOR_DEPTH
    }));
}
/** @internal */
function _provideAutoEntityState() {
    return [
        {
            provide: ENVIRONMENT_INITIALIZER,
            multi: true,
            useValue: addNgRxAutoEntityInjector
        }
    ];
}
/**
 * Provides the feature level Auto-Entity providers.
 *
 * @usageNotes
 *
 * ### Providing an Auto-Entity Feature State
 *
 * ```
 * provideState(featureState),
 * provideAutoEntityState()
 * ```
 *
 * @publicApi
 * @returns A set of providers to set up an Auto-Entity feature state.
 */
function provideAutoEntityState() {
    return makeEnvironmentProviders(_provideAutoEntityState());
}
const PROVIDED_SERVICES = [];
/**
 * Provides an entity's service.
 *
 * This will reuse existing services when possible.
 *
 * @usageNotes
 *
 * ### Providing an Entity's Service
 *
 * ```
 * provideEntityService(Products, ProductsService)
 * ```
 *
 * @publicApi
 * @param modelType The entity model to provide a service for.
 * @param service The service to provide.
 * @returns A set of providers to set up an entity's service.
 */
function provideEntityService(modelType, service) {
    const providers = [
        { provide: modelType, useExisting: service }
    ];
    if (!PROVIDED_SERVICES.includes(service)) {
        providers.unshift(service);
        PROVIDED_SERVICES.push(service);
    }
    return makeEnvironmentProviders(providers);
}
function withCustomStore(getStore, deps) {
    const providers = [
        { provide: NGRX_AUTO_ENTITY_APP_STORE, useFactory: getStore, deps },
    ];
    return autoEntityFeature(0 /* NgRxAutoEntityFeatureKind.CustomStoreFeature */, providers);
}
/**
 * Disables automatic providing of the Auto-Entity Store.
 * @internal
 */
function _withNoStore() {
    return autoEntityFeature(0 /* NgRxAutoEntityFeatureKind.CustomStoreFeature */, []);
}

class NgRxAutoEntityRootModuleWithEffects {
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleWithEffects, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleWithEffects }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleWithEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleWithEffects, decorators: [{
            type: NgModule,
            args: [{}]
        }] });
class NgRxAutoEntityRootModuleNoEntityEffects {
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleNoEntityEffects, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleNoEntityEffects }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleNoEntityEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleNoEntityEffects, decorators: [{
            type: NgModule,
            args: [{}]
        }] });
class NgRxAutoEntityRootModuleNoEffects {
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleNoEffects, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleNoEffects }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleNoEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleNoEffects, decorators: [{
            type: NgModule,
            args: [{}]
        }] });
class NgRxAutoEntityFeatureModule {
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityFeatureModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityFeatureModule }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityFeatureModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityFeatureModule, decorators: [{
            type: NgModule,
            args: [{}]
        }] });
class NgrxAutoEntityModule {
    static forRoot() {
        return {
            ngModule: NgRxAutoEntityRootModuleWithEffects,
            providers: [..._provideAutoEntityStore({}, [_withNoStore()])]
        };
    }
    static forRootNoEntityEffects() {
        return {
            ngModule: NgRxAutoEntityRootModuleNoEntityEffects,
            providers: [
                ..._provideAutoEntityStore({
                    withoutEntityEffects: true
                }, [_withNoStore()])
            ]
        };
    }
    static forRootNoEffects() {
        return {
            ngModule: NgRxAutoEntityRootModuleNoEffects,
            providers: [
                ..._provideAutoEntityStore({
                    withoutEntityEffects: true,
                    withoutExtraEffects: true
                }, [_withNoStore()])
            ]
        };
    }
    static forFeature() {
        return {
            ngModule: NgRxAutoEntityFeatureModule,
            providers: [..._provideAutoEntityState()]
        };
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgrxAutoEntityModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.2", ngImport: i0, type: NgrxAutoEntityModule }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgrxAutoEntityModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgrxAutoEntityModule, decorators: [{
            type: NgModule,
            args: [{}]
        }] });

/**
 * Builds a new facade class for the specified entity model and parent state.
 * @param selectors - the selector map for the specified entity
 */
const buildFacade = (selectors) => {
    const BaseFacade = class Facade {
        constructor(modelType, store) {
            this.modelType = modelType;
            this.store = store;
            this.all$ = this.store.select(selectors.selectAll);
            this.sorted$ = this.store.select(selectors.selectAllSorted);
            this.entities$ = this.store.select(selectors.selectEntities);
            this.ids$ = this.store.select(selectors.selectIds);
            this.total$ = this.store.select(selectors.selectTotal);
            this.hasEntities$ = this.store.select(selectors.selectHasEntities);
            this.hasNoEntities$ = this.store.select(selectors.selectHasNoEntities);
            this.total$ = this.store.select(selectors.selectTotal);
            this.current$ = this.store.select(selectors.selectCurrentEntity);
            this.currentKey$ = this.store.select(selectors.selectCurrentEntityKey);
            this.currentSet$ = this.store.select(selectors.selectCurrentEntities);
            this.currentSetKeys$ = this.store.select(selectors.selectCurrentEntitiesKeys);
            this.edited$ = this.store.select(selectors.selectEditedEntity);
            this.isDirty$ = this.store.select(selectors.selectIsDirty);
            this.currentPage$ = this.store.select(selectors.selectCurrentPage);
            this.currentRange$ = this.store.select(selectors.selectCurrentRange);
            this.totalPageable$ = this.store.select(selectors.selectTotalPageable);
            this.hasBeenLoaded$ = this.store.select(selectors.selectHasBeenLoaded);
            this.loadWasAttempted$ = this.store.select(selectors.selectLoadWasAttempted);
            this.isLoading$ = this.store.select(selectors.selectIsLoading);
            this.isSaving$ = this.store.select(selectors.selectIsSaving);
            this.isDeleting$ = this.store.select(selectors.selectIsDeleting);
            this.loadedAt$ = this.store.select(selectors.selectLoadedAt);
            this.savedAt$ = this.store.select(selectors.selectSavedAt);
            this.createdAt$ = this.store.select(selectors.selectCreatedAt);
            this.updatedAt$ = this.store.select(selectors.selectUpdatedAt);
            this.replacedAt$ = this.store.select(selectors.selectReplacedAt);
            this.deletedAt$ = this.store.select(selectors.selectDeletedAt);
        }
        /**
         * @deprecated customSorted$ relies on selectors with props, which has fallen out of practice. Will be removed
         * in the next version of auto-entity.
         */
        customSorted$(name) {
            return this.store.select(selectors.selectCustomSorted, { name });
        }
        // endregion
        // region Activities
        select(entity, correlationId) {
            const action = new Select(this.modelType, entity, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        selectByKey(key, correlationId) {
            const action = new SelectByKey(this.modelType, key, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        selectMany(entities, correlationId) {
            const action = new SelectMany(this.modelType, entities, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        selectMore(entities, correlationId) {
            const action = new SelectMore(this.modelType, entities, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        selectManyByKeys(keys, correlationId) {
            const action = new SelectManyByKeys(this.modelType, keys, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        selectMoreByKeys(keys, correlationId) {
            const action = new SelectMoreByKeys(this.modelType, keys, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        deselect(correlationId) {
            const action = new Deselect(this.modelType, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        deselectMany(entities, correlationId) {
            const action = new DeselectMany(this.modelType, entities, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        deselectManyByKeys(keys, correlationId) {
            const action = new DeselectManyByKeys(this.modelType, keys, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        deselectAll(correlationId) {
            const action = new DeselectAll(this.modelType, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        edit(entity, correlationId) {
            const action = new Edit(this.modelType, entity, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        editNew(entity, correlationId) {
            const action = new EditNew(this.modelType, entity, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        editByKey(key, correlationId) {
            const action = new EditByKey(this.modelType, key, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        change(entity, correlationId) {
            const action = new Change(this.modelType, entity, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        endEdit(correlationId) {
            const action = new EndEdit(this.modelType, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        load(keys, criteria, correlationId) {
            const action = new Load(this.modelType, keys, criteria, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        loadIfNecessary(keys, criteria, maxAge, correlationId) {
            const action = new LoadIfNecessary(this.modelType, keys, maxAge, criteria, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        loadMany(criteria, correlationId) {
            const action = new LoadMany(this.modelType, criteria, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        loadManyIfNecessary(criteria, maxAge, correlationId) {
            const action = new LoadManyIfNecessary(this.modelType, maxAge, criteria, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        loadAll(criteria, correlationId) {
            const action = new LoadAll(this.modelType, criteria, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        loadAllIfNecessary(criteria, maxAge, correlationId) {
            const action = new LoadAllIfNecessary(this.modelType, maxAge, criteria, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        loadPage(page, criteria, correlationId) {
            const action = new LoadPage(this.modelType, page, criteria, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        loadPageIfNecessary(page, criteria, maxAge, correlationId) {
            const action = new LoadPageIfNecessary(this.modelType, page, maxAge, criteria, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        loadRange(range, criteria, correlationId) {
            const action = new LoadRange(this.modelType, range, criteria, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        loadRangeIfNecessary(range, criteria, maxAge, correlationId) {
            const action = new LoadRangeIfNecessary(this.modelType, range, maxAge, criteria, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        create(entity, criteria, correlationId) {
            const action = new Create(this.modelType, entity, criteria, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        createMany(entities, criteria, correlationId) {
            const action = new CreateMany(this.modelType, entities, criteria, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        update(entity, criteria, correlationId) {
            const action = new Update(this.modelType, entity, criteria, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        updateMany(entities, criteria, correlationId) {
            const action = new UpdateMany(this.modelType, entities, criteria, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        upsert(entity, criteria, correlationId) {
            const action = new Upsert(this.modelType, entity, criteria, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        upsertMany(entities, criteria, correlationId) {
            const action = new UpsertMany(this.modelType, entities, criteria, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        replace(entity, criteria, correlationId) {
            const action = new Replace(this.modelType, entity, criteria, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        replaceMany(entities, criteria, correlationId) {
            const action = new ReplaceMany(this.modelType, entities, criteria, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        delete(entity, criteria, correlationId) {
            const action = new Delete(this.modelType, entity, criteria, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        deleteMany(entities, criteria, correlationId) {
            const action = new DeleteMany(this.modelType, entities, criteria, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        deleteByKey(key, criteria, correlationId) {
            const action = new DeleteByKey(this.modelType, key, criteria, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        deleteManyByKeys(keys, criteria, correlationId) {
            const action = new DeleteManyByKeys(this.modelType, keys, criteria, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
        clear(correlationId) {
            const action = new Clear(this.modelType, correlationId);
            this.store.dispatch(action);
            return action.correlationId;
        }
    };
    return BaseFacade;
};

const NAE_TYPE_ACTION_CACHE = '__nae_type_action_cache';
const cacheOnType = (Type, actionName, creatorCallback) => ((Type[NAE_TYPE_ACTION_CACHE] = Type[NAE_TYPE_ACTION_CACHE] || Object.create(null)),
    (Type[NAE_TYPE_ACTION_CACHE][actionName] = Type[NAE_TYPE_ACTION_CACHE][actionName] || creatorCallback()),
    Type[NAE_TYPE_ACTION_CACHE][actionName]);
function defineTypedFactoryFunction(type, creator) {
    return Object.defineProperty(creator, 'type', {
        value: type,
        writable: false
    });
}

const createCreateAction = (Type) => cacheOnType(Type, EntityActionTypes.Create, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.Create, Type), ({ entity, criteria, correlationId }) => new Create(Type, entity, criteria, correlationId)));
const createCreateSuccessAction = (Type) => cacheOnType(Type, EntityActionTypes.CreateSuccess, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.CreateSuccess, Type), ({ entity, criteria, correlationId }) => new CreateSuccess(Type, entity, criteria, correlationId)));
const createCreateFailureAction = (Type) => cacheOnType(Type, EntityActionTypes.CreateFailure, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.CreateFailure, Type), ({ error, entity, criteria, correlationId }) => new CreateFailure(Type, error, entity, criteria, correlationId)));
const createCreateManyAction = (Type) => cacheOnType(Type, EntityActionTypes.CreateMany, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.CreateMany, Type), ({ entities, criteria, correlationId }) => new CreateMany(Type, entities, criteria, correlationId)));
const createCreateManySuccessAction = (Type) => cacheOnType(Type, EntityActionTypes.CreateManySuccess, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.CreateManySuccess, Type), ({ entities, criteria, correlationId }) => new CreateManySuccess(Type, entities, criteria, correlationId)));
const createCreateManyFailureAction = (Type) => cacheOnType(Type, EntityActionTypes.CreateManyFailure, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.CreateManyFailure, Type), ({ error, entities, criteria, correlationId }) => new CreateManyFailure(Type, error, entities, criteria, correlationId)));

const createDeleteByKeyAction = (Type) => cacheOnType(Type, EntityActionTypes.DeleteByKey, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.DeleteByKey, Type), ({ key, criteria, correlationId }) => new DeleteByKey(Type, key, criteria, correlationId)));
const createDeleteByKeySuccessAction = (Type) => cacheOnType(Type, EntityActionTypes.DeleteByKeySuccess, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.DeleteByKeySuccess, Type), ({ key, criteria, correlationId }) => new DeleteByKeySuccess(Type, key, criteria, correlationId)));
const createDeleteByKeyFailureAction = (Type) => cacheOnType(Type, EntityActionTypes.DeleteByKeyFailure, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.DeleteByKeyFailure, Type), ({ error, key, criteria, correlationId }) => new DeleteByKeyFailure(Type, error, key, criteria, correlationId)));
const createDeleteManyByKeysAction = (Type) => cacheOnType(Type, EntityActionTypes.DeleteManyByKeys, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.DeleteManyByKeys, Type), ({ keys, criteria, correlationId }) => new DeleteManyByKeys(Type, keys, criteria, correlationId)));
const createDeleteManyByKeysSuccessAction = (Type) => cacheOnType(Type, EntityActionTypes.DeleteManyByKeysSuccess, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.DeleteManyByKeysSuccess, Type), ({ keys, criteria, correlationId }) => new DeleteManyByKeysSuccess(Type, keys, criteria, correlationId)));
const createDeleteManyByKeysFailureAction = (Type) => cacheOnType(Type, EntityActionTypes.DeleteManyByKeysFailure, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.DeleteManyByKeysFailure, Type), ({ error, keys, criteria, correlationId }) => new DeleteManyByKeysFailure(Type, error, keys, criteria, correlationId)));

const createDeleteAction = (Type) => cacheOnType(Type, EntityActionTypes.Delete, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.Delete, Type), ({ entity, criteria, correlationId }) => new Delete(Type, entity, criteria, correlationId)));
const createDeleteSuccessAction = (Type) => cacheOnType(Type, EntityActionTypes.DeleteSuccess, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.DeleteSuccess, Type), ({ entity, criteria, correlationId }) => new DeleteSuccess(Type, entity, criteria, correlationId)));
const createDeleteFailureAction = (Type) => cacheOnType(Type, EntityActionTypes.DeleteFailure, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.DeleteFailure, Type), ({ error, entity, criteria, correlationId }) => new DeleteFailure(Type, error, entity, criteria, correlationId)));
const createDeleteManyAction = (Type) => cacheOnType(Type, EntityActionTypes.DeleteMany, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.DeleteMany, Type), ({ entities, criteria, correlationId }) => new DeleteMany(Type, entities, criteria, correlationId)));
const createDeleteManySuccessAction = (Type) => cacheOnType(Type, EntityActionTypes.DeleteManySuccess, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.DeleteManySuccess, Type), ({ entities, criteria, correlationId }) => new DeleteManySuccess(Type, entities, criteria, correlationId)));
const createDeleteManyFailureAction = (Type) => cacheOnType(Type, EntityActionTypes.DeleteManyFailure, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.DeleteManyFailure, Type), ({ error, entities, criteria, correlationId }) => new DeleteManyFailure(Type, error, entities, criteria, correlationId)));

const createDeselectAction = (Type) => cacheOnType(Type, EntityActionTypes.Deselect, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.Deselect, Type), ({ correlationId } = {}) => new Deselect(Type, correlationId)));
const createDeselectManyAction = (Type) => cacheOnType(Type, EntityActionTypes.DeselectMany, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.DeselectMany, Type), ({ entities, correlationId }) => new DeselectMany(Type, entities, correlationId)));
const createDeselectManyByKeysAction = (Type) => cacheOnType(Type, EntityActionTypes.DeselectManyByKeys, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.DeselectManyByKeys, Type), ({ keys, correlationId }) => new DeselectManyByKeys(Type, keys, correlationId)));
const createDeselectAllAction = (Type) => cacheOnType(Type, EntityActionTypes.DeselectAll, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.DeselectAll, Type), ({ correlationId } = {}) => new DeselectAll(Type, correlationId)));
const createDeselectedAction = (Type) => cacheOnType(Type, EntityActionTypes.Deselected, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.Deselected, Type), ({ correlationId } = {}) => new Deselected(Type, correlationId)));
const createDeselectedManyAction = (Type) => cacheOnType(Type, EntityActionTypes.DeselectedMany, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.DeselectedMany, Type), ({ entities, correlationId }) => new DeselectedMany(Type, entities, correlationId)));

const createEditNewAction = (Type) => cacheOnType(Type, EntityActionTypes.EditNew, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.EditNew, Type), ({ entity, correlationId }) => new EditNew(Type, entity, correlationId)));
const createEditAction = (Type) => cacheOnType(Type, EntityActionTypes.Edit, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.Edit, Type), ({ entity, correlationId }) => new Edit(Type, entity, correlationId)));
const createEditByKeyAction = (Type) => cacheOnType(Type, EntityActionTypes.EditByKey, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.EditByKey, Type), ({ key, correlationId }) => new EditByKey(Type, key, correlationId)));
const createEditedAction = (Type) => cacheOnType(Type, EntityActionTypes.Edited, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.Edited, Type), ({ entity, correlationId }) => new Edited(Type, entity, correlationId)));
const createEditedByKeyAction = (Type) => cacheOnType(Type, EntityActionTypes.EditedByKey, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.EditedByKey, Type), ({ key, correlationId }) => new EditedByKey(Type, key, correlationId)));
const createChangeAction = (Type) => cacheOnType(Type, EntityActionTypes.Change, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.Change, Type), ({ entity, correlationId }) => new Change(Type, entity, correlationId)));
const createChangedAction = (Type) => cacheOnType(Type, EntityActionTypes.Changed, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.Changed, Type), ({ entity, correlationId }) => new Changed(Type, entity, correlationId)));
const createEndEditAction = (Type) => cacheOnType(Type, EntityActionTypes.EndEdit, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.EndEdit, Type), ({ correlationId } = {}) => new EndEdit(Type, correlationId)));
const createEditEndedAction = (Type) => cacheOnType(Type, EntityActionTypes.EditEnded, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.EditEnded, Type), ({ correlationId } = {}) => new EditEnded(Type, correlationId)));

const createClearAction = (Type) => cacheOnType(Type, EntityActionTypes.Clear, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.Clear, Type), ({ correlationId } = {}) => new Clear(Type, correlationId)));

const createLoadAllAction = (Type) => cacheOnType(Type, EntityActionTypes.LoadAll, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.LoadAll, Type), ({ criteria, correlationId } = {}) => new LoadAll(Type, criteria, correlationId)));
const createLoadAllIfNecessaryAction = (Type) => cacheOnType(Type, EntityActionTypes.LoadAllIfNecessary, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.LoadAllIfNecessary, Type), ({ maxAge, criteria, correlationId } = {}) => new LoadAllIfNecessary(Type, maxAge, criteria, correlationId)));
const createLoadAllSuccessAction = (Type) => cacheOnType(Type, EntityActionTypes.LoadAllSuccess, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.LoadAllSuccess, Type), ({ entities, criteria, correlationId }) => new LoadAllSuccess(Type, entities, criteria, correlationId)));
const createLoadAllFailureAction = (Type) => cacheOnType(Type, EntityActionTypes.LoadAllFailure, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.LoadAllFailure, Type), ({ error, criteria, correlationId }) => new LoadAllFailure(Type, error, criteria, correlationId)));

const createLoadAction = (Type) => cacheOnType(Type, EntityActionTypes.Load, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.Load, Type), ({ keys, criteria, correlationId }) => new Load(Type, keys, criteria, correlationId)));
const createLoadIfNecessaryAction = (Type) => cacheOnType(Type, EntityActionTypes.LoadIfNecessary, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.LoadIfNecessary, Type), ({ keys, maxAge, criteria, correlationId } = {}) => new LoadIfNecessary(Type, keys, maxAge, criteria, correlationId)));
const createLoadSuccessAction = (Type) => cacheOnType(Type, EntityActionTypes.LoadSuccess, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.LoadSuccess, Type), ({ entity, keys, criteria, correlationId }) => new LoadSuccess(Type, entity, keys, criteria, correlationId)));
const createLoadFailureAction = (Type) => cacheOnType(Type, EntityActionTypes.LoadFailure, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.LoadFailure, Type), ({ error, keys, criteria, correlationId }) => new LoadFailure(Type, error, keys, criteria, correlationId)));

const createLoadManyAction = (Type) => cacheOnType(Type, EntityActionTypes.LoadMany, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.LoadMany, Type), ({ criteria, correlationId } = {}) => new LoadMany(Type, criteria, correlationId)));
const createLoadManyIfNecessaryAction = (Type) => cacheOnType(Type, EntityActionTypes.LoadManyIfNecessary, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.LoadManyIfNecessary, Type), ({ maxAge, criteria, correlationId } = {}) => new LoadManyIfNecessary(Type, maxAge, criteria, correlationId)));
const createLoadManySuccessAction = (Type) => cacheOnType(Type, EntityActionTypes.LoadManySuccess, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.LoadManySuccess, Type), ({ entities, criteria, correlationId }) => new LoadManySuccess(Type, entities, criteria, correlationId)));
const createLoadManyFailureAction = (Type) => cacheOnType(Type, EntityActionTypes.LoadManyFailure, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.LoadManyFailure, Type), ({ error, criteria, correlationId }) => new LoadManyFailure(Type, error, criteria, correlationId)));

const createLoadPageAction = (Type) => cacheOnType(Type, EntityActionTypes.LoadPage, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.LoadPage, Type), ({ page, criteria, correlationId }) => new LoadPage(Type, page, criteria, correlationId)));
const createLoadPageIfNecessaryAction = (Type) => cacheOnType(Type, EntityActionTypes.LoadPageIfNecessary, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.LoadPageIfNecessary, Type), ({ page, maxAge, criteria, correlationId }) => new LoadPageIfNecessary(Type, page, maxAge, criteria, correlationId)));
const createLoadPageSuccessAction = (Type) => cacheOnType(Type, EntityActionTypes.LoadPageSuccess, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.LoadPageSuccess, Type), ({ entities, pageInfo, criteria, correlationId }) => new LoadPageSuccess(Type, entities, pageInfo, criteria, correlationId)));
const createLoadPageFailureAction = (Type) => cacheOnType(Type, EntityActionTypes.LoadPageFailure, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.LoadPageFailure, Type), ({ error, page, criteria, correlationId }) => new LoadPageFailure(Type, error, criteria, correlationId)));

const createLoadRangeAction = (Type) => cacheOnType(Type, EntityActionTypes.LoadRange, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.LoadRange, Type), ({ range, criteria, correlationId }) => new LoadRange(Type, range, criteria, correlationId)));
const createLoadRangeIfNecessaryAction = (Type) => cacheOnType(Type, EntityActionTypes.LoadRangeIfNecessary, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.LoadRangeIfNecessary, Type), ({ range, maxAge, criteria, correlationId }) => new LoadRangeIfNecessary(Type, range, maxAge, criteria, correlationId)));
const createLoadRangeSuccessAction = (Type) => cacheOnType(Type, EntityActionTypes.LoadRangeSuccess, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.LoadRangeSuccess, Type), ({ entities, rangeInfo, criteria, correlationId }) => new LoadRangeSuccess(Type, entities, rangeInfo, criteria, correlationId)));
const createLoadRangeFailureAction = (Type) => cacheOnType(Type, EntityActionTypes.LoadRangeFailure, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.LoadRangeFailure, Type), ({ error, range, criteria, correlationId }) => new LoadRangeFailure(Type, error, range, criteria, correlationId)));

const createReplaceAction = (Type) => cacheOnType(Type, EntityActionTypes.Replace, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.Replace, Type), ({ entity, criteria, correlationId }) => new Replace(Type, entity, criteria, correlationId)));
const createReplaceSuccessAction = (Type) => cacheOnType(Type, EntityActionTypes.ReplaceSuccess, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.ReplaceSuccess, Type), ({ entity, criteria, correlationId }) => new ReplaceSuccess(Type, entity, criteria, correlationId)));
const createReplaceFailureAction = (Type) => cacheOnType(Type, EntityActionTypes.ReplaceFailure, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.ReplaceFailure, Type), ({ error, entity, criteria, correlationId }) => new ReplaceFailure(Type, error, entity, criteria, correlationId)));
const createReplaceManyAction = (Type) => cacheOnType(Type, EntityActionTypes.ReplaceMany, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.ReplaceMany, Type), ({ entities, criteria, correlationId }) => new ReplaceMany(Type, entities, criteria, correlationId)));
const createReplaceManySuccessAction = (Type) => cacheOnType(Type, EntityActionTypes.ReplaceManySuccess, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.ReplaceManySuccess, Type), ({ entities, criteria, correlationId }) => new ReplaceManySuccess(Type, entities, criteria, correlationId)));
const createReplaceManyFailureAction = (Type) => cacheOnType(Type, EntityActionTypes.ReplaceManyFailure, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.ReplaceManyFailure, Type), ({ error, entities, criteria, correlationId }) => new ReplaceManyFailure(Type, error, entities, criteria, correlationId)));

const createSelectAction = (Type) => cacheOnType(Type, EntityActionTypes.Select, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.Select, Type), ({ entity, correlationId }) => new Select(Type, entity, correlationId)));
const createSelectByKeyAction = (Type) => cacheOnType(Type, EntityActionTypes.SelectByKey, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.SelectByKey, Type), ({ key, correlationId }) => new SelectByKey(Type, key, correlationId)));
const createSelectManyAction = (Type) => cacheOnType(Type, EntityActionTypes.SelectMany, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.SelectMany, Type), ({ entities, correlationId }) => new SelectMany(Type, entities, correlationId)));
const createSelectMoreAction = (Type) => cacheOnType(Type, EntityActionTypes.SelectMore, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.SelectMore, Type), ({ entities, correlationId }) => new SelectMore(Type, entities, correlationId)));
const createSelectManyByKeysAction = (Type) => cacheOnType(Type, EntityActionTypes.SelectManyByKeys, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.SelectManyByKeys, Type), ({ keys, correlationId }) => new SelectManyByKeys(Type, keys, correlationId)));
const createSelectMoreByKeysAction = (Type) => cacheOnType(Type, EntityActionTypes.SelectMoreByKeys, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.SelectMoreByKeys, Type), ({ keys, correlationId }) => new SelectMoreByKeys(Type, keys, correlationId)));
const createSelectedAction = (Type) => cacheOnType(Type, EntityActionTypes.Selected, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.Selected, Type), ({ entity, correlationId }) => new Selected(Type, entity, correlationId)));
const createSelectedManyAction = (Type) => cacheOnType(Type, EntityActionTypes.SelectedMany, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.SelectedMany, Type), ({ entities, correlationId }) => new SelectedMany(Type, entities, correlationId)));
const createSelectedMoreAction = (Type) => cacheOnType(Type, EntityActionTypes.SelectedMore, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.SelectedMore, Type), ({ entities, correlationId }) => new SelectedMore(Type, entities, correlationId)));

const createUpdateAction = (Type) => cacheOnType(Type, EntityActionTypes.Update, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.Update, Type), ({ entity, criteria, correlationId }) => new Update(Type, entity, criteria, correlationId)));
const createUpdateSuccessAction = (Type) => cacheOnType(Type, EntityActionTypes.UpdateSuccess, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.UpdateSuccess, Type), ({ entity, criteria, correlationId }) => new UpdateSuccess(Type, entity, criteria, correlationId)));
const createUpdateFailureAction = (Type) => cacheOnType(Type, EntityActionTypes.UpdateFailure, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.UpdateFailure, Type), ({ error, entity, criteria, correlationId }) => new UpdateFailure(Type, error, entity, criteria, correlationId)));
const createUpdateManyAction = (Type) => cacheOnType(Type, EntityActionTypes.UpdateMany, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.UpdateMany, Type), ({ entities, criteria, correlationId }) => new UpdateMany(Type, entities, criteria, correlationId)));
const createUpdateManySuccessAction = (Type) => cacheOnType(Type, EntityActionTypes.UpdateManySuccess, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.UpdateManySuccess, Type), ({ entities, criteria, correlationId }) => new UpdateManySuccess(Type, entities, criteria, correlationId)));
const createUpdateManyFailureAction = (Type) => cacheOnType(Type, EntityActionTypes.UpdateManyFailure, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.UpdateManyFailure, Type), ({ error, entities, criteria, correlationId }) => new UpdateManyFailure(Type, error, entities, criteria, correlationId)));

const createUpsertAction = (Type) => cacheOnType(Type, EntityActionTypes.Upsert, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.Upsert, Type), ({ entity, criteria, correlationId }) => new Upsert(Type, entity, criteria, correlationId)));
const createUpsertSuccessAction = (Type) => cacheOnType(Type, EntityActionTypes.UpsertSuccess, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.UpsertSuccess, Type), ({ entity, criteria, correlationId }) => new UpsertSuccess(Type, entity, criteria, correlationId)));
const createUpsertFailureAction = (Type) => cacheOnType(Type, EntityActionTypes.UpsertFailure, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.UpsertFailure, Type), ({ error, entity, criteria, correlationId }) => new UpsertFailure(Type, error, entity, criteria, correlationId)));
const createUpsertManyAction = (Type) => cacheOnType(Type, EntityActionTypes.UpsertMany, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.UpsertMany, Type), ({ entities, criteria, correlationId }) => new UpsertMany(Type, entities, criteria, correlationId)));
const createUpsertManySuccessAction = (Type) => cacheOnType(Type, EntityActionTypes.UpsertManySuccess, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.UpsertManySuccess, Type), ({ entities, criteria, correlationId }) => new UpsertManySuccess(Type, entities, criteria, correlationId)));
const createUpsertManyFailureAction = (Type) => cacheOnType(Type, EntityActionTypes.UpsertManyFailure, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.UpsertManyFailure, Type), ({ error, entities, criteria, correlationId }) => new UpsertManyFailure(Type, error, entities, criteria, correlationId)));

const buildActionMap = (Type) => {
    class ActionFactoryResolver {
        get load() {
            return createLoadAction(Type);
        }
        get loadIfNecessary() {
            return createLoadIfNecessaryAction(Type);
        }
        get loadSuccess() {
            return createLoadSuccessAction(Type);
        }
        get loadFailure() {
            return createLoadFailureAction(Type);
        }
        get loadAll() {
            return createLoadAllAction(Type);
        }
        get loadAllIfNecessary() {
            return createLoadAllIfNecessaryAction(Type);
        }
        get loadAllSuccess() {
            return createLoadAllSuccessAction(Type);
        }
        get loadAllFailure() {
            return createLoadAllFailureAction(Type);
        }
        get loadMany() {
            return createLoadManyAction(Type);
        }
        get loadManyIfNecessary() {
            return createLoadManyIfNecessaryAction(Type);
        }
        get loadManySuccess() {
            return createLoadManySuccessAction(Type);
        }
        get loadManyFailure() {
            return createLoadManyFailureAction(Type);
        }
        get loadPage() {
            return createLoadPageAction(Type);
        }
        get loadPageIfNecessary() {
            return createLoadPageIfNecessaryAction(Type);
        }
        get loadPageSuccess() {
            return createLoadPageSuccessAction(Type);
        }
        get loadPageFailure() {
            return createLoadPageFailureAction(Type);
        }
        get loadRange() {
            return createLoadRangeAction(Type);
        }
        get loadRangeIfNecessary() {
            return createLoadRangeIfNecessaryAction(Type);
        }
        get loadRangeSuccess() {
            return createLoadRangeSuccessAction(Type);
        }
        get loadRangeFailure() {
            return createLoadRangeFailureAction(Type);
        }
        get create() {
            return createCreateAction(Type);
        }
        get createSuccess() {
            return createCreateSuccessAction(Type);
        }
        get createFailure() {
            return createCreateFailureAction(Type);
        }
        get createMany() {
            return createCreateManyAction(Type);
        }
        get createManySuccess() {
            return createCreateManySuccessAction(Type);
        }
        get createManyFailure() {
            return createCreateManyFailureAction(Type);
        }
        get update() {
            return createUpdateAction(Type);
        }
        get updateSuccess() {
            return createUpdateSuccessAction(Type);
        }
        get updateFailure() {
            return createUpdateFailureAction(Type);
        }
        get updateMany() {
            return createUpdateManyAction(Type);
        }
        get updateManySuccess() {
            return createUpdateManySuccessAction(Type);
        }
        get updateManyFailure() {
            return createUpdateManyFailureAction(Type);
        }
        get upsert() {
            return createUpsertAction(Type);
        }
        get upsertSuccess() {
            return createUpsertSuccessAction(Type);
        }
        get upsertFailure() {
            return createUpsertFailureAction(Type);
        }
        get upsertMany() {
            return createUpsertManyAction(Type);
        }
        get upsertManySuccess() {
            return createUpsertManySuccessAction(Type);
        }
        get upsertManyFailure() {
            return createUpsertManyFailureAction(Type);
        }
        get replace() {
            return createReplaceAction(Type);
        }
        get replaceSuccess() {
            return createReplaceSuccessAction(Type);
        }
        get replaceFailure() {
            return createReplaceFailureAction(Type);
        }
        get replaceMany() {
            return createReplaceManyAction(Type);
        }
        get replaceManySuccess() {
            return createReplaceManySuccessAction(Type);
        }
        get replaceManyFailure() {
            return createReplaceManyFailureAction(Type);
        }
        get clear() {
            return createClearAction(Type);
        }
        get delete() {
            return createDeleteAction(Type);
        }
        get deleteSuccess() {
            return createDeleteSuccessAction(Type);
        }
        get deleteFailure() {
            return createDeleteFailureAction(Type);
        }
        get deleteMany() {
            return createDeleteManyAction(Type);
        }
        get deleteManySuccess() {
            return createDeleteManySuccessAction(Type);
        }
        get deleteManyFailure() {
            return createDeleteManyFailureAction(Type);
        }
        get deleteByKey() {
            return createDeleteByKeyAction(Type);
        }
        get deleteByKeySuccess() {
            return createDeleteByKeySuccessAction(Type);
        }
        get deleteByKeyFailure() {
            return createDeleteByKeyFailureAction(Type);
        }
        get deleteManyByKeys() {
            return createDeleteManyByKeysAction(Type);
        }
        get deleteManyByKeysSuccess() {
            return createDeleteManyByKeysSuccessAction(Type);
        }
        get deleteManyByKeysFailure() {
            return createDeleteManyByKeysFailureAction(Type);
        }
        get deselect() {
            return createDeselectAction(Type);
        }
        get deselectMany() {
            return createDeselectManyAction(Type);
        }
        get deselectManyByKeys() {
            return createDeselectManyByKeysAction(Type);
        }
        get deselectAll() {
            return createDeselectAllAction(Type);
        }
        get deselected() {
            return createDeselectedAction(Type);
        }
        get deselectedMany() {
            return createDeselectedManyAction(Type);
        }
        get select() {
            return createSelectAction(Type);
        }
        get selectByKey() {
            return createSelectByKeyAction(Type);
        }
        get selectMany() {
            return createSelectManyAction(Type);
        }
        get selectMore() {
            return createSelectMoreAction(Type);
        }
        get selectManyByKeys() {
            return createSelectManyByKeysAction(Type);
        }
        get selectMoreByKeys() {
            return createSelectMoreByKeysAction(Type);
        }
        get selected() {
            return createSelectedAction(Type);
        }
        get selectedMany() {
            return createSelectedManyAction(Type);
        }
        get selectedMore() {
            return createSelectedMoreAction(Type);
        }
        get editNew() {
            return createEditNewAction(Type);
        }
        get edit() {
            return createEditAction(Type);
        }
        get editByKey() {
            return createEditByKeyAction(Type);
        }
        get edited() {
            return createEditedAction(Type);
        }
        get editedByKey() {
            return createEditedByKeyAction(Type);
        }
        get change() {
            return createChangeAction(Type);
        }
        get changed() {
            return createChangedAction(Type);
        }
        get endEdit() {
            return createEndEditAction(Type);
        }
        get editEnded() {
            return createEditEndedAction(Type);
        }
    }
    const actionMap = new ActionFactoryResolver();
    return actionMap;
};

// prettier-ignore
const mapToEditedEntity = (edits) => (!edits ? undefined : edits.editedEntity);
// prettier-ignore
const mapToIsDirty = (edits) => (!edits ? false : !!edits.isDirty);

// prettier-ignore
const mapToEntityArray = (entities, ids) => !ids || !entities ? [] : ids.map(id => entities[id]);
// prettier-ignore
const mapToSortedEntityArray = (type) => (all) => !all ? [] : all.sort(entityComparer(type));
// prettier-ignore
const mapToCustomSortedEntityArray = (type) => (all, { name }) => !all ? [] : all.sort(entityComparer(type, name));
// prettier-ignore
const mapToHasEntities = (ids) => !!ids && !!ids.length;
// prettier-ignore
const mapToHasNoEntities = (ids) => !ids || !ids.length;
// prettier-ignore
const mapToTotal = (ids) => !ids ? 0 : ids.length;

// prettier-ignore
const mapToCurrentPage = (paging) => !paging ? undefined : paging.currentPage;
// prettier-ignore
const mapToCurrentRange = (paging) => !paging ? undefined : paging.currentRange;
// prettier-ignore
const mapToTotalPageable = (paging) => !paging ? 0 : paging.totalPageableCount || 0;

// prettier-ignore
const mapToEntities = (state) => (!state || !state.entities ? {} : state.entities);
// prettier-ignore
const mapToIds = (state) => (!state || !state.ids ? [] : state.ids);
// prettier-ignore
const mapToSelections = (state) => (!state || !state.selections ? undefined : state.selections);
// prettier-ignore
const mapToEdits = (state) => (!state || !state.edits ? undefined : state.edits);
// prettier-ignore
const mapToPaging = (state) => (!state || !state.paging ? undefined : state.paging);
// prettier-ignore
const mapToTracking = (state) => (!state || !state.tracking ? undefined : state.tracking);

// prettier-ignore
const mapToCurrentEntity = (selections, entities) => !entities || !selections ? undefined : entities[selections.currentEntityKey];
// prettier-ignore
const mapToCurrentEntityKey = (selections) => (!selections ? undefined : selections.currentEntityKey);
// prettier-ignore
const mapToCurrentEntities = (selections, entities) => (!selections || !selections.currentEntitiesKeys || !entities)
    ? []
    : selections.currentEntitiesKeys.reduce((all, key) => entities[key] ? [...all, entities[key]] : all, []);
// prettier-ignore
const mapToCurrentEntitiesKeys = (selections) => (!selections || !selections.currentEntitiesKeys) ? [] : selections.currentEntitiesKeys;

// prettier-ignore
const mapToHasBeenLoaded = (tracking) => tracking?.loadedAt != null;
// prettier-ignore
const mapToLoadWasAttempted = (tracking) => tracking?.isLoading != null;
// prettier-ignore
const mapToIsLoading = (tracking) => !tracking ? false : !!tracking.isLoading;
// prettier-ignore
const mapToIsSaving = (tracking) => !tracking ? false : !!tracking.isSaving;
// prettier-ignore
const mapToIsDeleting = (tracking) => !tracking ? false : !!tracking.isDeleting;
// prettier-ignore
const mapToLoadedAt = (tracking) => (!tracking || !tracking.loadedAt) ? undefined : new Date(tracking.loadedAt);
// prettier-ignore
const mapToSavedAt = (tracking) => (!tracking || !tracking.savedAt) ? undefined : new Date(tracking.savedAt);
// prettier-ignore
const mapToCreatedAt = (tracking) => (!tracking || !tracking.createdAt) ? undefined : new Date(tracking.createdAt);
// prettier-ignore
const mapToUpdatedAt = (tracking) => (!tracking || !tracking.updatedAt) ? undefined : new Date(tracking.updatedAt);
// prettier-ignore
const mapToReplacedAt = (tracking) => (!tracking || !tracking.replacedAt) ? undefined : new Date(tracking.replacedAt);
// prettier-ignore
const mapToDeletedAt = (tracking) => (!tracking || !tracking.deletedAt) ? undefined : new Date(tracking.deletedAt);

// prettier-ignore
const buildSelectorMap = (getState, type) => {
    class SelectorResolver {
        // State Roots:
        get selectEntities() {
            return createSelector(getState, mapToEntities);
        }
        get selectIds() {
            return createSelector(getState, mapToIds);
        }
        get selectSelections() {
            return createSelector(getState, mapToSelections);
        }
        get selectEdits() {
            return createSelector(getState, mapToEdits);
        }
        get selectPaging() {
            return createSelector(getState, mapToPaging);
        }
        get selectTracking() {
            return createSelector(getState, mapToTracking);
        }
        // Entity:
        get selectAll() {
            return createSelector(this.selectEntities, this.selectIds, mapToEntityArray);
        }
        get selectAllSorted() {
            return createSelector(this.selectAll, mapToSortedEntityArray(type));
        }
        get selectCustomSorted() {
            return createSelector(this.selectAll, mapToCustomSortedEntityArray(type));
        }
        get selectTotal() {
            return createSelector(this.selectIds, mapToTotal);
        }
        get selectHasEntities() {
            return createSelector(this.selectIds, mapToHasEntities);
        }
        get selectHasNoEntities() {
            return createSelector(this.selectIds, mapToHasNoEntities);
        }
        // Selections:
        get selectCurrentEntity() {
            return createSelector(this.selectSelections, this.selectEntities, mapToCurrentEntity);
        }
        get selectCurrentEntityKey() {
            return createSelector(this.selectSelections, mapToCurrentEntityKey);
        }
        get selectCurrentEntities() {
            return createSelector(this.selectSelections, this.selectEntities, mapToCurrentEntities);
        }
        get selectCurrentEntitiesKeys() {
            return createSelector(this.selectSelections, mapToCurrentEntitiesKeys);
        }
        // Edits:
        get selectEditedEntity() {
            return createSelector(this.selectEdits, mapToEditedEntity);
        }
        get selectIsDirty() {
            return createSelector(this.selectEdits, mapToIsDirty);
        }
        // Paging:
        get selectCurrentPage() {
            return createSelector(this.selectPaging, mapToCurrentPage);
        }
        get selectCurrentRange() {
            return createSelector(this.selectPaging, mapToCurrentRange);
        }
        get selectTotalPageable() {
            return createSelector(this.selectPaging, mapToTotalPageable);
        }
        // Tracking:
        get selectHasBeenLoaded() {
            return createSelector(this.selectTracking, mapToHasBeenLoaded);
        }
        get selectLoadWasAttempted() {
            return createSelector(this.selectTracking, mapToLoadWasAttempted);
        }
        get selectIsLoading() {
            return createSelector(this.selectTracking, mapToIsLoading);
        }
        get selectIsSaving() {
            return createSelector(this.selectTracking, mapToIsSaving);
        }
        get selectIsDeleting() {
            return createSelector(this.selectTracking, mapToIsDeleting);
        }
        get selectLoadedAt() {
            return createSelector(this.selectTracking, mapToLoadedAt);
        }
        get selectSavedAt() {
            return createSelector(this.selectTracking, mapToSavedAt);
        }
        get selectCreatedAt() {
            return createSelector(this.selectTracking, mapToCreatedAt);
        }
        get selectUpdatedAt() {
            return createSelector(this.selectTracking, mapToUpdatedAt);
        }
        get selectReplacedAt() {
            return createSelector(this.selectTracking, mapToReplacedAt);
        }
        get selectDeletedAt() {
            return createSelector(this.selectTracking, mapToDeletedAt);
        }
    }
    const resolver = new SelectorResolver();
    return resolver;
};

const createEntity = (Type) => (obj) => ({ entity: Type ? new Type() : undefined, obj });
const populateEntity = ({ entity, obj }) => entity ? Object.keys(obj || {}).reduce((populated, key) => ((populated[key] = obj[key]), populated), entity) : undefined;
const makeEntity = (Type) => (obj) => obj && Type && Object.assign(Object.create(Type.prototype), obj);

const sortAlpha = (aKey, bKey) => aKey.localeCompare(bKey);
const sortNumeric = (aKey, bKey) => aKey - bKey;
const defaultSort = (aKey, bKey) => typeof aKey === 'string' ? sortAlpha(aKey, bKey) : sortNumeric(aKey, bKey);
const NO_ENTITY_DECORATOR_MSG = 
// eslint-disable-next-line max-len
'Specified model is not decorated with @Entity. All automatic entities must be decorated with a modelName specified. Building of state aborted!';
const ensureEntityDecorator = (type) => {
    if (!type[ENTITY_OPTS_PROP]) {
        const example = ` Example model with proper decoration:

@Entity({modelName: 'Test'})
export class Test {
  @Key yourKey: number | string;
  // ... other properties ...
}`;
        console.error('[NGRX-AE] ! ' + NO_ENTITY_DECORATOR_MSG + example);
        throw new Error(NO_ENTITY_DECORATOR_MSG);
    }
};
const NO_ENTITY_KEY_MSG = 
// eslint-disable-next-line max-len
'Specified model has no properties decorated with @Key. All automatic entities must have at least one property identified as the entity key. Building of state aborted!';
const ensureEntityKey = (type) => {
    if (!type.prototype[NAE_KEY_NAMES] || !type.prototype[NAE_KEYS]) {
        const example = ` Example model with proper decoration:

@Entity({modelName: '${type[ENTITY_OPTS_PROP].modelName}'})
export class ${type[ENTITY_OPTS_PROP].modelName} {
  @Key yourKey: number | string;
  // ... other properties ...
}`;
        console.error('[NGRX-AE] ! ' + NO_ENTITY_KEY_MSG + example);
        throw new Error(NO_ENTITY_KEY_MSG);
    }
};
const NO_MODEL_NAME_MSG = 
// eslint-disable-next-line max-len
'Specified model is decorated with @Entity but does not specify a modelName, which is required for proper production execution. Building of state aborted!';
const ensureModelName = (opts) => {
    if (!opts.modelName) {
        const example = ` Example model with proper decoration:

@Entity({modelName: 'Test'})
export class Test {
  @Key yourKey: number | string;
  // ... other properties ...
}`;
        console.error('[NGRX-AE] ! ' + NO_MODEL_NAME_MSG + example);
        throw new Error(NO_MODEL_NAME_MSG);
    }
};
/**
 * Builds the initial Ngrx state for an entity
 *
 * @param type - the entity class
 * @param extraInitialState - the (optional) initial state
 */
const buildState = (type, extraInitialState) => {
    ensureEntityDecorator(type);
    ensureEntityKey(type);
    const opts = type[ENTITY_OPTS_PROP];
    ensureModelName(opts);
    const stateName = entityStateName(opts.modelName);
    const getState = (state) => {
        const modelState = state[stateName];
        if (!modelState) {
            // eslint-disable-next-line max-len
            const message = `State for model ${opts.modelName} could not be found! Make sure you add your entity state to the parent state with a property named exactly '${stateName}'.`;
            const example = ` Example app state:

export interface AppState {
  // ... other states ...
  ${stateName}: IEntityState<${opts.modelName}>,
  // ... other states ...
}`;
            console.error('[NGRX-AE] ! ' + message + example);
            throw new Error(message);
        }
        return modelState;
    };
    const initialState = {
        entities: {},
        ids: [],
        ...extraInitialState
    };
    /* eslint-disable @typescript-eslint/naming-convention,no-underscore-dangle,id-blacklist,id-match */
    let _actions;
    let _selectors;
    let _facade;
    let _reducer;
    const entityState = getState;
    let _makeEntity;
    /* eslint-enable @typescript-eslint/naming-convention,no-underscore-dangle,id-blacklist,id-match */
    class StateBuilder {
        get entityState() {
            return entityState;
        }
        get initialState() {
            return initialState;
        }
        get actions() {
            _actions = _actions || buildActionMap(type);
            return _actions;
        }
        get selectors() {
            _selectors = _selectors || buildSelectorMap(getState, type);
            return _selectors;
        }
        get reducer() {
            _reducer =
                _reducer ||
                    ((state = initialState) => {
                        return state;
                    });
            return _reducer;
        }
        get makeEntity() {
            _makeEntity = _makeEntity || makeEntity(type);
            return _makeEntity;
        }
        get facade() {
            _facade = _facade || buildFacade(this.selectors);
            return _facade;
        }
    }
    const built = new StateBuilder();
    return built;
};
/**
 * Builds the Ngrx state for an entity that is part of a feature module
 *
 * @param type the entity class
 * @param featureStateName the name of the feature state
 * @param selectParentState a selector for the entity's parent state
 * @param extraInitialState the (optional) initial feature state
 */
const buildFeatureState = (type, featureStateName, selectParentState, extraInitialState) => {
    ensureEntityDecorator(type);
    ensureEntityKey(type);
    const opts = type[ENTITY_OPTS_PROP];
    ensureModelName(opts);
    const stateName = entityStateName(opts.modelName);
    type[FEATURE_AFFINITY] = featureStateName;
    const selectState = createSelector(selectParentState, (state) => {
        if (!state) {
            // eslint-disable-next-line max-len
            const message = `Could not retrieve feature state ${featureStateName} for model ${opts.modelName}! Make sure you add your entity state to the feature state with a property named exactly '${stateName}'.`;
            const example = ` Example app state:

export interface FeatureState {
  // ... other states ...
  ${stateName}: IEntityState<${opts.modelName}>,
  // ... other states ...
}`;
            console.error('[NGRX-AE] ! ' + message + example);
            throw new Error(message);
        }
        const modelState = state[stateName];
        if (!modelState) {
            const message = `State for model ${opts.modelName} in feature ${featureStateName} could not be found!`;
            console.error('[NGRX-AE] ! ' + message);
            throw new Error(message);
        }
        return modelState;
    });
    const initialState = {
        entities: {},
        ids: [],
        ...extraInitialState
    };
    /* eslint-disable @typescript-eslint/naming-convention,no-underscore-dangle,id-blacklist,id-match */
    let _actions;
    let _selectors;
    let _facade;
    let _reducer;
    const entityState = selectState;
    let _makeEntity;
    /* eslint-enable @typescript-eslint/naming-convention, no-underscore-dangle, id-blacklist, id-match */
    class StateBuilder {
        get entityState() {
            return entityState;
        }
        get initialState() {
            return initialState;
        }
        get actions() {
            _actions = _actions || buildActionMap(type);
            return _actions;
        }
        get selectors() {
            _selectors = _selectors || buildSelectorMap(selectState, type);
            return _selectors;
        }
        get reducer() {
            _reducer =
                _reducer ||
                    ((state = initialState) => {
                        return state;
                    });
            return _reducer;
        }
        get makeEntity() {
            _makeEntity = _makeEntity || makeEntity(type);
            return _makeEntity;
        }
        get facade() {
            _facade = _facade || buildFacade(this.selectors);
            return _facade;
        }
    }
    const built = new StateBuilder();
    return built;
};

/**
 * Entity decorator for configuring each entity model.
 *
 * @param nameOrOptions - The model name or configuration options to apply
 * @param maybeOptions - Additional options to apply if a model name is passed as the first param
 */
function Entity(nameOrOptions, maybeOptions) {
    return function entityDecorator(constructor) {
        const initialOptions = typeof nameOrOptions === 'object' ? nameOrOptions : { modelName: nameOrOptions };
        const options = maybeOptions ? { ...maybeOptions, ...initialOptions } : initialOptions;
        const descriptor = Object.create(null);
        descriptor.configurable = false;
        descriptor.enumerable = false;
        descriptor.writable = false;
        descriptor.value = options;
        Object.defineProperty(constructor, ENTITY_OPTS_PROP, descriptor);
        return constructor;
    };
}

/**
 * Used to designate the key property for the entity
 *
 * @param target the entity's class
 * @param keyName the key's name
 */
function Key(target, keyName) {
    target[NAE_KEY_NAMES] = target[NAE_KEY_NAMES] ? [...target[NAE_KEY_NAMES], keyName] : [keyName];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !target[NAE_KEYS] && Object.defineProperty(target, NAE_KEYS, { get: () => target[NAE_KEY_NAMES] });
}

var EntityAge;
(function (EntityAge) {
    EntityAge[EntityAge["Minute"] = 60] = "Minute";
    EntityAge[EntityAge["Hour"] = 3600] = "Hour";
    EntityAge[EntityAge["QuarterDay"] = 21600] = "QuarterDay";
    EntityAge[EntityAge["HalfDay"] = 43200] = "HalfDay";
    EntityAge[EntityAge["Day"] = 86400] = "Day";
    EntityAge[EntityAge["Week"] = 604800] = "Week";
})(EntityAge || (EntityAge = {}));

const EXTRA_EFFECTS_EXCLUSION = Object.freeze({
    [EntityActionTypes.Select]: true,
    [EntityActionTypes.SelectMany]: true,
    [EntityActionTypes.SelectByKey]: true,
    [EntityActionTypes.SelectManyByKeys]: true,
    [EntityActionTypes.Deselect]: true,
    [EntityActionTypes.DeselectMany]: true,
    [EntityActionTypes.DeselectManyByKeys]: true,
    [EntityActionTypes.DeselectAll]: true,
    [EntityActionTypes.Clear]: true
});
const CURD_EFFECTS_EXCLUSION = Object.freeze({
    [EntityActionTypes.Create]: true,
    [EntityActionTypes.CreateMany]: true,
    [EntityActionTypes.Update]: true,
    [EntityActionTypes.UpdateMany]: true,
    [EntityActionTypes.Upsert]: true,
    [EntityActionTypes.UpsertMany]: true,
    [EntityActionTypes.Replace]: true,
    [EntityActionTypes.ReplaceMany]: true,
    [EntityActionTypes.Delete]: true,
    [EntityActionTypes.DeleteMany]: true,
    [EntityActionTypes.DeleteByKey]: true,
    [EntityActionTypes.DeleteManyByKeys]: true
});
const LOAD_EFFECTS_EXCLUSION = Object.freeze({
    [EntityActionTypes.Load]: true,
    [EntityActionTypes.LoadAll]: true,
    [EntityActionTypes.LoadMany]: true,
    [EntityActionTypes.LoadPage]: true,
    [EntityActionTypes.LoadRange]: true
});
const ALL_EFFECTS_EXCLUSION = Object.freeze({
    ...LOAD_EFFECTS_EXCLUSION,
    ...CURD_EFFECTS_EXCLUSION,
    ...EXTRA_EFFECTS_EXCLUSION
});

const except = (effects) => (...actions) => ({
    ...(effects || {}),
    ...actions.reduce((acc, action) => ({ ...acc, [action]: false }), {})
});
const matching = (...actions) => ({
    ...actions.reduce((acc, action) => ({ ...acc, [action]: true }), {})
});
const all = Object.freeze({
    ...ALL_EFFECTS_EXCLUSION,
    except: except(ALL_EFFECTS_EXCLUSION)
});
const extra = Object.freeze({
    ...EXTRA_EFFECTS_EXCLUSION,
    except: except(EXTRA_EFFECTS_EXCLUSION)
});
const loads = Object.freeze({
    ...LOAD_EFFECTS_EXCLUSION,
    except: except(LOAD_EFFECTS_EXCLUSION)
});
const curd = Object.freeze({
    ...CURD_EFFECTS_EXCLUSION,
    except: except(CURD_EFFECTS_EXCLUSION)
});

class LoadEffects {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.load$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Load), this.ops.load()));
        this.loadAll$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadAll), this.ops.loadAll()));
        this.loadMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadMany), this.ops.loadMany()));
        this.loadPage$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadPage), this.ops.loadPage()));
        this.loadRange$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadRange), this.ops.loadRange()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadEffects, deps: [{ token: i1.Actions }, { token: EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: EntityOperators }] });

class LoadIfNecessaryEffects {
    constructor(actions$, ifnOps) {
        this.actions$ = actions$;
        this.ifnOps = ifnOps;
        this.loadIfNecessary$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadIfNecessary), this.ifnOps.loadIfNecessary()));
        this.loadAllIfNecessary$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadAllIfNecessary), this.ifnOps.loadAllIfNecessary()));
        this.loadManyIfNecessary$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadManyIfNecessary), this.ifnOps.loadManyIfNecessary()));
        this.loadPageIfNecessary$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadPageIfNecessary), this.ifnOps.loadPageIfNecessary()));
        this.loadRangeIfNecessary$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadRangeIfNecessary), this.ifnOps.loadRangeIfNecessary()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadIfNecessaryEffects, deps: [{ token: i1.Actions }, { token: EntityIfNecessaryOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadIfNecessaryEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadIfNecessaryEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: EntityIfNecessaryOperators }] });

class CUDEffects {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.create$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Create), this.ops.create()));
        this.createMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.CreateMany), this.ops.createMany()));
        this.update$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Update), this.ops.update()));
        this.updateMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.UpdateMany), this.ops.updateMany()));
        this.upsert$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Upsert), this.ops.upsert()));
        this.upsertMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.UpsertMany), this.ops.upsertMany()));
        this.replace$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Replace), this.ops.replace()));
        this.replaceMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.ReplaceMany), this.ops.replaceMany()));
        this.delete$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Delete), this.ops.delete()));
        this.deleteMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.DeleteMany), this.ops.deleteMany()));
        this.deleteByKey$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.DeleteByKey), this.ops.deleteByKey()));
        this.deleteManyByKeys$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.DeleteManyByKeys), this.ops.deleteManyByKey()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: CUDEffects, deps: [{ token: i1.Actions }, { token: EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: CUDEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: CUDEffects, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: EntityOperators }] });

class LoadEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.load$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Load), this.ops.load()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadEffect, deps: [{ token: i1.Actions }, { token: EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: EntityOperators }] });
class LoadAllEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.loadAll$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadAll), this.ops.loadAll()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadAllEffect, deps: [{ token: i1.Actions }, { token: EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadAllEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadAllEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: EntityOperators }] });
class LoadManyEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.loadMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadMany), this.ops.loadMany()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadManyEffect, deps: [{ token: i1.Actions }, { token: EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadManyEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadManyEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: EntityOperators }] });
class LoadPageEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.loadPage$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadPage), this.ops.loadPage()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadPageEffect, deps: [{ token: i1.Actions }, { token: EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadPageEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadPageEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: EntityOperators }] });
class LoadRangeEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.loadRange$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadRange), this.ops.loadRange()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadRangeEffect, deps: [{ token: i1.Actions }, { token: EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadRangeEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadRangeEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: EntityOperators }] });

class CreateEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.create$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Create), this.ops.create()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: CreateEffect, deps: [{ token: i1.Actions }, { token: EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: CreateEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: CreateEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: EntityOperators }] });
class CreateManyEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.createMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.CreateMany), this.ops.createMany()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: CreateManyEffect, deps: [{ token: i1.Actions }, { token: EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: CreateManyEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: CreateManyEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: EntityOperators }] });
class UpdateEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.update$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Update), this.ops.update()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpdateEffect, deps: [{ token: i1.Actions }, { token: EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpdateEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpdateEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: EntityOperators }] });
class UpdateManyEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.updateMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.UpdateMany), this.ops.updateMany()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpdateManyEffect, deps: [{ token: i1.Actions }, { token: EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpdateManyEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpdateManyEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: EntityOperators }] });
class UpsertEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.update$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Upsert), this.ops.upsert()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpsertEffect, deps: [{ token: i1.Actions }, { token: EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpsertEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpsertEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: EntityOperators }] });
class UpsertManyEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.updateMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.UpsertMany), this.ops.upsertMany()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpsertManyEffect, deps: [{ token: i1.Actions }, { token: EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpsertManyEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpsertManyEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: EntityOperators }] });
class ReplaceEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.replace$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Replace), this.ops.replace()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: ReplaceEffect, deps: [{ token: i1.Actions }, { token: EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: ReplaceEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: ReplaceEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: EntityOperators }] });
class ReplaceManyEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.replaceMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.ReplaceMany), this.ops.replaceMany()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: ReplaceManyEffect, deps: [{ token: i1.Actions }, { token: EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: ReplaceManyEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: ReplaceManyEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: EntityOperators }] });
class DeleteEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.delete$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Delete), this.ops.delete()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteEffect, deps: [{ token: i1.Actions }, { token: EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: EntityOperators }] });
class DeleteManyEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.deleteMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.DeleteMany), this.ops.deleteMany()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteManyEffect, deps: [{ token: i1.Actions }, { token: EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteManyEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteManyEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: EntityOperators }] });
class DeleteByKeyEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.deleteByKey$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.DeleteByKey), this.ops.deleteByKey()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteByKeyEffect, deps: [{ token: i1.Actions }, { token: EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteByKeyEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteByKeyEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: EntityOperators }] });
class DeleteManyByKeysEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.deleteManyByKeys$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.DeleteManyByKeys), this.ops.deleteManyByKey()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteManyByKeysEffect, deps: [{ token: i1.Actions }, { token: EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteManyByKeysEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteManyByKeysEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: EntityOperators }] });

/*
 * Public API Surface of ngrx-auto-entity
 */
/*
 * Modules
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CUDEffects, Change, Changed, Clear, Create, CreateEffect, CreateFailure, CreateMany, CreateManyEffect, CreateManyFailure, CreateManySuccess, CreateSuccess, Delete, DeleteByKey, DeleteByKeyEffect, DeleteByKeyFailure, DeleteByKeySuccess, DeleteEffect, DeleteFailure, DeleteMany, DeleteManyByKeys, DeleteManyByKeysEffect, DeleteManyByKeysFailure, DeleteManyByKeysSuccess, DeleteManyEffect, DeleteManyFailure, DeleteManySuccess, DeleteSuccess, Deselect, DeselectAll, DeselectMany, DeselectManyByKeys, Deselected, ENTITY_OPTS_PROP, Edit, EditByKey, EditEnded, EditNew, Edited, EditedByKey, EndEdit, Entity, EntityAction, EntityActionTypes, EntityAge, EntityEffects, EntityOperators, ExtraEffects, Key, Load, LoadAll, LoadAllEffect, LoadAllFailure, LoadAllIfNecessary, LoadAllSuccess, LoadEffect, LoadEffects, LoadFailure, LoadIfNecessary, LoadIfNecessaryEffects, LoadMany, LoadManyEffect, LoadManyFailure, LoadManyIfNecessary, LoadManySuccess, LoadPage, LoadPageEffect, LoadPageFailure, LoadPageIfNecessary, LoadPageSuccess, LoadRange, LoadRangeEffect, LoadRangeFailure, LoadRangeIfNecessary, LoadRangeSuccess, LoadSuccess, NAE_TYPE_ACTION_CACHE, NGRX_AUTO_ENTITY_APP_STORE, NGRX_AUTO_ENTITY_CONFIG, NgRxAutoEntityFeatureModule, NgRxAutoEntityRootModuleNoEffects, NgRxAutoEntityRootModuleNoEntityEffects, NgRxAutoEntityRootModuleWithEffects, NgrxAutoEntityModule, NgrxAutoEntityService, Replace, ReplaceEffect, ReplaceFailure, ReplaceMany, ReplaceManyEffect, ReplaceManyFailure, ReplaceManySuccess, ReplaceSuccess, Select, SelectByKey, SelectMany, SelectManyByKeys, SelectMore, SelectMoreByKeys, Selected, SelectedMany, Update, UpdateEffect, UpdateFailure, UpdateMany, UpdateManyEffect, UpdateManyFailure, UpdateManySuccess, UpdateSuccess, Upsert, UpsertEffect, UpsertFailure, UpsertMany, UpsertManyEffect, UpsertManyFailure, UpsertManySuccess, UpsertSuccess, all, autoEntityMetaReducer, autoEntityReducer, buildActionMap, buildFacade, buildFeatureState, buildSelectorMap, buildState, checkKeyName, curd, entityComparer, entityMaxAge, entityTransforms, except, extra, fromEntityActions, getKey, getKeyFromEntity, getKeyFromModel, getKeyNames, getKeyNamesFromEntity, getKeyNamesFromModel, getNgRxAutoEntityMetaReducer, isEntityActionInstance, loads, makeEntity, matching, nameOfEntity, ofEntityAction, ofEntityType, pluralNameOfEntity, provideAutoEntityState, provideAutoEntityStore, provideEntityService, stateNameFromAction, stateNameOfEntity, transformEntitiesFromServer, transformEntitiesToServer, transformEntityFromServer, transformEntityToServer, uriNameOfEntity, withCustomStore };
//# sourceMappingURL=briebug-ngrx-auto-entity.mjs.map
