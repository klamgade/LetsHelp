import { CanDeactivate } from "../../node_modules/@angular/router";
import { LoginComponent } from "../app/components/login/login.component";

export class PreventUnsavedChangesGuard implements CanDeactivate<LoginComponent>{

    canDeactivate(component: LoginComponent) {
        debugger;
        if (component.userForm.dirty)
            return confirm("Are you sure?");

        return true;
    }
}
