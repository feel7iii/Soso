import { NgModule } from '@angular/core';

import {
    ButtonsComponent,
    CardsComponent,
    FormsComponent,
    SocialButtonsComponent,
    SwitchesComponent,
    TablesComponent,
    ModalsComponent,
    TabsComponent
} from './';

// Forms Component
import { DropdownModule } from 'ng2-bootstrap/dropdown';

// Modal Component
import { ModalModule } from 'ng2-bootstrap/modal';

// Tabs Component
import { TabsModule } from 'ng2-bootstrap/tabs';

// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
    imports: [
        ComponentsRoutingModule,
        DropdownModule.forRoot(),
        ModalModule.forRoot(),
        TabsModule
    ],
    declarations: [
        ButtonsComponent,
        CardsComponent,
        FormsComponent,
        ModalsComponent,
        SocialButtonsComponent,
        SwitchesComponent,
        TablesComponent,
        TabsComponent
    ]
})
export class ComponentsModule { }
