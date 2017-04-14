import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { SosoHomeModule } from './home/home.module';
import { SosoAdminModule } from './admin/admin.module';
import { SosoAccountModule } from './account/account.module';
import { SosoEntityModule } from './entities/entity.module';
import { ComponentsModule } from './component/components.module'

import { LayoutRoutingModule } from './layouts';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import {
    SosoSharedModule,
    UserRouteAccessService,
    NavDropdownDirective,
    NavDropdownToggleDirective,
    SidebarToggleDirective,
    SidebarOffCanvasCloseDirective,
    AsideToggleDirective
} from './shared';

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent,
    SidebarComponent,
    AsideComponent,
    BreadcrumbsComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        SosoSharedModule,
        SosoHomeModule,
        SosoAdminModule,
        SosoAccountModule,
        SosoEntityModule,
        ComponentsModule
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent,
        NavDropdownDirective,
        NavDropdownToggleDirective,
        SidebarToggleDirective,
        SidebarOffCanvasCloseDirective,
        SidebarComponent,
        AsideComponent,
        BreadcrumbsComponent,
        AsideToggleDirective
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class SosoAppModule {}
