"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tree_1 = require('./utils/tree');
var collection_1 = require('./utils/collection');
var url_tree_1 = require('./url_tree');
var shared_1 = require('./shared');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var RouterState = (function (_super) {
    __extends(RouterState, _super);
    function RouterState(root, queryParams, fragment, snapshot) {
        _super.call(this, root);
        this.queryParams = queryParams;
        this.fragment = fragment;
        this.snapshot = snapshot;
    }
    return RouterState;
}(tree_1.Tree));
exports.RouterState = RouterState;
function createEmptyState(rootComponent) {
    var snapshot = createEmptyStateSnapshot(rootComponent);
    var emptyUrl = new BehaviorSubject_1.BehaviorSubject([new url_tree_1.UrlSegment("", {}, shared_1.PRIMARY_OUTLET)]);
    var emptyParams = new BehaviorSubject_1.BehaviorSubject({});
    var emptyQueryParams = new BehaviorSubject_1.BehaviorSubject({});
    var fragment = new BehaviorSubject_1.BehaviorSubject("");
    var activated = new ActivatedRoute(emptyUrl, emptyParams, shared_1.PRIMARY_OUTLET, rootComponent, snapshot.root);
    activated.snapshot = snapshot.root;
    return new RouterState(new tree_1.TreeNode(activated, []), emptyQueryParams, fragment, snapshot);
}
exports.createEmptyState = createEmptyState;
function createEmptyStateSnapshot(rootComponent) {
    var rootUrlSegment = new url_tree_1.UrlSegment("", {}, shared_1.PRIMARY_OUTLET);
    var emptyUrl = [rootUrlSegment];
    var emptyParams = {};
    var emptyQueryParams = {};
    var fragment = "";
    var activated = new ActivatedRouteSnapshot(emptyUrl, emptyParams, shared_1.PRIMARY_OUTLET, rootComponent, null, rootUrlSegment);
    return new RouterStateSnapshot(new tree_1.TreeNode(activated, []), emptyQueryParams, fragment);
}
var ActivatedRoute = (function () {
    function ActivatedRoute(urlSegments, params, outlet, component, futureSnapshot) {
        this.urlSegments = urlSegments;
        this.params = params;
        this.outlet = outlet;
        this.component = component;
        this._futureSnapshot = futureSnapshot;
    }
    return ActivatedRoute;
}());
exports.ActivatedRoute = ActivatedRoute;
var ActivatedRouteSnapshot = (function () {
    function ActivatedRouteSnapshot(urlSegments, params, outlet, component, routeConfig, lastUrlSegment) {
        this.urlSegments = urlSegments;
        this.params = params;
        this.outlet = outlet;
        this.component = component;
        this._routeConfig = routeConfig;
        this._lastUrlSegment = lastUrlSegment;
    }
    return ActivatedRouteSnapshot;
}());
exports.ActivatedRouteSnapshot = ActivatedRouteSnapshot;
var RouterStateSnapshot = (function (_super) {
    __extends(RouterStateSnapshot, _super);
    function RouterStateSnapshot(root, queryParams, fragment) {
        _super.call(this, root);
        this.queryParams = queryParams;
        this.fragment = fragment;
    }
    return RouterStateSnapshot;
}(tree_1.Tree));
exports.RouterStateSnapshot = RouterStateSnapshot;
function advanceActivatedRoute(route) {
    if (route.snapshot && !collection_1.shallowEqual(route.snapshot.params, route._futureSnapshot.params)) {
        route.snapshot = route._futureSnapshot;
        route.urlSegments.next(route.snapshot.urlSegments);
        route.params.next(route.snapshot.params);
    }
    else {
        route.snapshot = route._futureSnapshot;
    }
}
exports.advanceActivatedRoute = advanceActivatedRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3N0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcl9zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxxQkFBK0IsY0FBYyxDQUFDLENBQUE7QUFDOUMsMkJBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFDbEQseUJBQTJCLFlBQVksQ0FBQyxDQUFBO0FBRXhDLHVCQUF1QyxVQUFVLENBQUMsQ0FBQTtBQUVsRCxnQ0FBZ0Msc0JBQXNCLENBQUMsQ0FBQTtBQWtCdkQ7SUFBaUMsK0JBQW9CO0lBSW5ELHFCQUFZLElBQThCLEVBQVMsV0FBK0IsRUFBUyxRQUE0QixFQUFTLFFBQTZCO1FBQzNKLGtCQUFNLElBQUksQ0FBQyxDQUFDO1FBRHFDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUFTLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7SUFFN0osQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQVBELENBQWlDLFdBQUksR0FPcEM7QUFQWSxtQkFBVyxjQU92QixDQUFBO0FBRUQsMEJBQWlDLGFBQW1CO0lBQ2xELElBQU0sUUFBUSxHQUFHLHdCQUF3QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pELElBQU0sUUFBUSxHQUFHLElBQUksaUNBQWUsQ0FBQyxDQUFDLElBQUkscUJBQVUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLHVCQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0UsSUFBTSxXQUFXLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELElBQU0sUUFBUSxHQUFHLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QyxJQUFNLFNBQVMsR0FBRyxJQUFJLGNBQWMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxF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LENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7SUFDekMsQ0FBQztBQUNILENBQUM7QUFSZSw2QkFBcUIsd0JBUXBDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmVlLCBUcmVlTm9kZSB9IGZyb20gJy4vdXRpbHMvdHJlZSc7XG5pbXBvcnQgeyBzaGFsbG93RXF1YWwgfSBmcm9tICcuL3V0aWxzL2NvbGxlY3Rpb24nO1xuaW1wb3J0IHsgVXJsU2VnbWVudCB9IGZyb20gJy4vdXJsX3RyZWUnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBQYXJhbXMsIFBSSU1BUllfT1VUTEVUIH0gZnJvbSAnLi9zaGFyZWQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XG5pbXBvcnQgeyBUeXBlLCBDb21wb25lbnRGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhlIHN0YXRlIG9mIHRoZSByb3V0ZXIuXG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogYGBgXG4gKiBjbGFzcyBNeUNvbXBvbmVudCB7XG4gKiAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyKSB7XG4gKiAgICAgY29uc3Qgc3RhdGUgPSByb3V0ZXIucm91dGVyU3RhdGU7XG4gKiAgICAgY29uc3QgaWQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHN0YXRlLmZpcnN0Q2hpbGQoc3RhdGUucm9vdCkucGFyYW1zLm1hcChwID0+IHAuaWQpO1xuICogICAgIGNvbnN0IGlzRGVidWc6IE9ic2VydmFibGU8c3RyaW5nPiA9IHN0YXRlLnF1ZXJ5UGFyYW1zLm1hcChxID0+IHEuZGVidWcpO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvdXRlclN0YXRlIGV4dGVuZHMgVHJlZTxBY3RpdmF0ZWRSb3V0ZT4ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihyb290OiBUcmVlTm9kZTxBY3RpdmF0ZWRSb3V0ZT4sIHB1YmxpYyBxdWVyeVBhcmFtczogT2JzZXJ2YWJsZTxQYXJhbXM+LCBwdWJsaWMgZnJhZ21lbnQ6IE9ic2VydmFibGU8c3RyaW5nPiwgcHVibGljIHNuYXBzaG90OiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XG4gICAgc3VwZXIocm9vdCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVtcHR5U3RhdGUocm9vdENvbXBvbmVudDogVHlwZSk6IFJvdXRlclN0YXRlIHtcbiAgY29uc3Qgc25hcHNob3QgPSBjcmVhdGVFbXB0eVN0YXRlU25hcHNob3Qocm9vdENvbXBvbmVudCk7XG4gIGNvbnN0IGVtcHR5VXJsID0gbmV3IEJlaGF2aW9yU3ViamVjdChbbmV3IFVybFNlZ21lbnQoXCJcIiwge30sIFBSSU1BUllfT1VUTEVUKV0pO1xuICBjb25zdCBlbXB0eVBhcmFtcyA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pO1xuICBjb25zdCBlbXB0eVF1ZXJ5UGFyYW1zID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7fSk7XG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IEJlaGF2aW9yU3ViamVjdChcIlwiKTtcbiAgY29uc3QgYWN0aXZhdGVkID0gbmV3IEFjdGl2YXRlZFJvdXRlKGVtcHR5VXJsLCBlbXB0eVBhcmFtcywgUFJJTUFSWV9PVVRMRVQsIHJvb3RDb21wb25lbnQsIHNuYXBzaG90LnJvb3QpO1xuICBhY3RpdmF0ZWQuc25hcHNob3QgPSBzbmFwc2hvdC5yb290O1xuICByZXR1cm4gbmV3IFJvdXRlclN0YXRlKG5ldyBUcmVlTm9kZTxBY3RpdmF0ZWRSb3V0ZT4oYWN0aXZhdGVkLCBbXSksIGVtcHR5UXVlcnlQYXJhbXMsIGZyYWdtZW50LCBzbmFwc2hvdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVtcHR5U3RhdGVTbmFwc2hvdChyb290Q29tcG9uZW50OiBUeXBlKTogUm91dGVyU3RhdGVTbmFwc2hvdCB7XG4gIGNvbnN0IHJvb3RVcmxTZWdtZW50ID0gbmV3IFVybFNlZ21lbnQoXCJcIiwge30sIFBSSU1BUllfT1VUTEVUKTtcbiAgY29uc3QgZW1wdHlVcmwgPSBbcm9vdFVybFNlZ21lbnRdO1xuICBjb25zdCBlbXB0eVBhcmFtcyA9IHt9O1xuICBjb25zdCBlbXB0eVF1ZXJ5UGFyYW1zID0ge307XG4gIGNvbnN0IGZyYWdtZW50ID0gXCJcIjtcbiAgY29uc3QgYWN0aXZhdGVkID0gbmV3IEFjdGl2YXRlZFJvdXRlU25hcHNob3QoZW1wdHlVcmwsIGVtcHR5UGFyYW1zLCBQUklNQVJZX09VVExFVCwgcm9vdENvbXBvbmVudCwgbnVsbCwgcm9vdFVybFNlZ21lbnQpO1xuICByZXR1cm4gbmV3IFJvdXRlclN0YXRlU25hcHNob3QobmV3IFRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlU25hcHNob3Q+KGFjdGl2YXRlZCwgW10pLCBlbXB0eVF1ZXJ5UGFyYW1zLCBmcmFnbWVudCk7XG59XG5cbi8qKlxuICogQ29udGFpbnMgdGhlIGluZm9ybWF0aW9uIGFib3V0IGEgY29tcG9uZW50IGxvYWRlZCBpbiBhbiBvdXRsZXQuIFRoZSBpbmZvcm1hdGlvbiBpcyBwcm92aWRlZCB0aHJvdWdoXG4gKiB0aGUgcGFyYW1zIGFuZCB1cmxTZWdtZW50cyBvYnNlcnZhYmxlcy5cbiAqXG4gKiAjIyMgVXNhZ2VcbiAqXG4gKiBgYGBcbiAqIGNsYXNzIE15Q29tcG9uZW50IHtcbiAqICAgY29uc3RydWN0b3Iocm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gKiAgICAgY29uc3QgaWQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHJvdXRlLnBhcmFtcy5tYXAocCA9PiBwLmlkKTtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBBY3RpdmF0ZWRSb3V0ZSB7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2Z1dHVyZVNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xuICBzbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdXJsU2VnbWVudHM6IE9ic2VydmFibGU8VXJsU2VnbWVudFtdPixcbiAgICAgICAgICAgICAgcHVibGljIHBhcmFtczogT2JzZXJ2YWJsZTxQYXJhbXM+LFxuICAgICAgICAgICAgICBwdWJsaWMgb3V0bGV0OiBzdHJpbmcsXG4gICAgICAgICAgICAgIHB1YmxpYyBjb21wb25lbnQ6IFR5cGUgfCBzdHJpbmcsXG4gICAgICAgICAgICAgIGZ1dHVyZVNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90XG4gICkge1xuICAgIHRoaXMuX2Z1dHVyZVNuYXBzaG90ID0gZnV0dXJlU25hcHNob3Q7XG4gIH1cbn1cblxuLyoqXG4gKiBDb250YWlucyB0aGUgaW5mb3JtYXRpb24gYWJvdXQgYSBjb21wb25lbnQgbG9hZGVkIGluIGFuIG91dGxldCBhdCBhIHBhcnRpY3VsYXIgbW9tZW50IGluIHRpbWUuXG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogYGBgXG4gKiBjbGFzcyBNeUNvbXBvbmVudCB7XG4gKiAgIGNvbnN0cnVjdG9yKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICogICAgIGNvbnN0IGlkOiBzdHJpbmcgPSByb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQ7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9yZXNvbHZlZENvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8YW55PjtcbiAgXG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIF9yb3V0ZUNvbmZpZzogUm91dGUgfCBudWxsO1xuXG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIF9sYXN0VXJsU2VnbWVudDogVXJsU2VnbWVudDtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdXJsU2VnbWVudHM6IFVybFNlZ21lbnRbXSxcbiAgICAgICAgICAgICAgcHVibGljIHBhcmFtczogUGFyYW1zLFxuICAgICAgICAgICAgICBwdWJsaWMgb3V0bGV0OiBzdHJpbmcsXG4gICAgICAgICAgICAgIHB1YmxpYyBjb21wb25lbnQ6IFR5cGUgfCBzdHJpbmcsIFxuICAgICAgICAgICAgICByb3V0ZUNvbmZpZzogUm91dGUgfCBudWxsLFxuICAgICAgICAgICAgICBsYXN0VXJsU2VnbWVudDogVXJsU2VnbWVudCkge1xuICAgIHRoaXMuX3JvdXRlQ29uZmlnID0gcm91dGVDb25maWc7XG4gICAgdGhpcy5fbGFzdFVybFNlZ21lbnQgPSBsYXN0VXJsU2VnbWVudDtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBzdGF0ZSBvZiB0aGUgcm91dGVyIGF0IGEgcGFydGljdWxhciBtb21lbnQgaW4gdGltZS5cbiAqXG4gKiAjIyMgVXNhZ2VcbiAqXG4gKiBgYGBcbiAqIGNsYXNzIE15Q29tcG9uZW50IHtcbiAqICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIpIHtcbiAqICAgICBjb25zdCBzbmFwc2hvdCA9IHJvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdDtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3V0ZXJTdGF0ZVNuYXBzaG90IGV4dGVuZHMgVHJlZTxBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90PiB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGNvbnN0cnVjdG9yKHJvb3Q6IFRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlU25hcHNob3Q+LCBwdWJsaWMgcXVlcnlQYXJhbXM6IFBhcmFtcywgcHVibGljIGZyYWdtZW50OiBzdHJpbmcgfCBudWxsKSB7XG4gICAgc3VwZXIocm9vdCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgZXhwZWN0YXRpb24gaXMgdGhhdCB0aGUgYWN0aXZhdGUgcm91dGUgaXMgY3JlYXRlZCB3aXRoIHRoZSByaWdodCBzZXQgb2YgcGFyYW1ldGVycy5cbiAqIFNvIHdlIHB1c2ggbmV3IHZhbHVlcyBpbnRvIHRoZSBvYnNlcnZhYmxlcyBvbmx5IHdoZW4gdGhleSBhcmUgbm90IHRoZSBpbml0aWFsIHZhbHVlcy5cbiAqIEFuZCB3ZSBkZXRlY3QgdGhhdCBieSBjaGVja2luZyBpZiB0aGUgc25hcHNob3QgZmllbGQgaXMgc2V0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWR2YW5jZUFjdGl2YXRlZFJvdXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSk6IHZvaWQge1xuICBpZiAocm91dGUuc25hcHNob3QgJiYgIXNoYWxsb3dFcXVhbChyb3V0ZS5zbmFwc2hvdC5wYXJhbXMsIHJvdXRlLl9mdXR1cmVTbmFwc2hvdC5wYXJhbXMpKSB7XG4gICAgcm91dGUuc25hcHNob3QgPSByb3V0ZS5fZnV0dXJlU25hcHNob3Q7XG4gICAgKDxhbnk+cm91dGUudXJsU2VnbWVudHMpLm5leHQocm91dGUuc25hcHNob3QudXJsU2VnbWVudHMpO1xuICAgICg8YW55PnJvdXRlLnBhcmFtcykubmV4dChyb3V0ZS5zbmFwc2hvdC5wYXJhbXMpO1xuICB9IGVsc2Uge1xuICAgIHJvdXRlLnNuYXBzaG90ID0gcm91dGUuX2Z1dHVyZVNuYXBzaG90O1xuICB9XG59Il19