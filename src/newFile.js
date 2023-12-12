import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';
import Navigate from './components/Navigate.vue';

export default (() => {
const __VLS_setup = async () => {
export default {
components: {
NavBar,
SideBar,
Navigate
}
};
const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {};
},
});

const __VLS_componentsOption = {};

let __VLS_name!: 'App';
function __VLS_template() {
let __VLS_ctx!: InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_localComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption & typeof __VLS_ctx;
let __VLS_otherComponents!: typeof __VLS_localComponents & import('./__VLS_types.js').GlobalComponents;
let __VLS_own!: import('./__VLS_types.js').SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; }) >;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_templateComponents!: {} &
import('./__VLS_types.js').WithComponent<'NavBar', typeof __VLS_components, 'NavBar'> &
import('./__VLS_types.js').WithComponent<'SideBar', typeof __VLS_components, 'SideBar'> &
import('./__VLS_types.js').WithComponent<'Navigate', typeof __VLS_components, 'Navigate'>;
__VLS_components.NavBar;
// @ts-ignore
[NavBar,];
__VLS_components.SideBar; __VLS_components.SideBar;
// @ts-ignore
[SideBar, SideBar,];
__VLS_components.Navigate; __VLS_components.Navigate;
// @ts-ignore
[Navigate, Navigate,];
{
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.NavBar>) = {};
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { id: ("main"), class: ("container-fluid"), };
{
__VLS_templateComponents.SideBar;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.SideBar>) = { class: ("item"), };
}
{
__VLS_templateComponents.Navigate;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.Navigate>) = { class: ("item"), };
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
NavBar: NavBar,
SideBar: SideBar,
Navigate: Navigate,
};
},
});
return {} as typeof __VLS_publicComponent;
};
return {} as typeof __VLS_setup extends () => Promise<infer T> ? T : never;
})({} as any);
