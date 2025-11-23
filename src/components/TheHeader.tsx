import { NavLink, Outlet } from "react-router-dom";
import { 
  Sparkles, 
  MoveRight, 
  Menu, 
  ChartPie, 
  SplinePointer, 
  Fingerprint, 
  SquarePlus, 
  X, 
  CirclePlay, 
  Phone,
  ChevronDown

} from "lucide-react";
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'

const nav_links = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Our Aim", href: "/our-aim" },
];

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPie },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: SplinePointer },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: Fingerprint },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquarePlus },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: MoveRight },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: CirclePlay },
  { name: 'Contact sales', href: '#', icon: Phone },
]

export function TheHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="bg-gray-900 z-50 sticky top-34 sm:top-22">

            
      {/* <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-6">
          <NavLink to="/" className="flex items-center gap-2" aria-label="StoreBuilder home">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-semibold tracking-tight text-slate-900">
              StoreBuilder
            </span>
          </NavLink>
          <nav className="flex items-center gap-6 text-sm font-medium">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-2 py-1 transition-colors ${
                    isActive ? "text-blue-600" : "text-slate-500 hover:text-slate-900"
                  }`
                }
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header> */}

            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">

                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                        alt=""
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                        className="h-8 w-auto"
                    />
                    </a>
                </div> 
                <div className="flex lg:hidden">
                    <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                    >
                    <span className="sr-only">Open main menu</span>
                    <Menu aria-hidden="true" className="size-6" />
                    </button>
                </div>

                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    {/* <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
                            Product
                            <ChevronDown aria-hidden="true" className="size-5 flex-none text-gray-500" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            <div className="p-4">
                            {products.map((item) => (
                                <div
                                key={item.name}
                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5"
                                >
                                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                                    <item.icon aria-hidden="true" className="size-6 text-gray-400 group-hover:text-white" />
                                </div>
                                <div className="flex-auto">
                                    <a href={item.href} className="block font-semibold text-white">
                                    {item.name}
                                    <span className="absolute inset-0" />
                                    </a>
                                    <p className="mt-1 text-gray-400">{item.description}</p>
                                </div>
                                </div>
                            ))}
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-white/10 bg-gray-700/50">
                            {callsToAction.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-white hover:bg-gray-700/50"
                                >
                                <item.icon aria-hidden="true" className="size-5 flex-none text-gray-500" />
                                {item.name}
                                </a>
                            ))}
                            </div>
                        </PopoverPanel>
                    </Popover> */}

                    {nav_links.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                            {item.name}
                        </a>
                    ))}
                </PopoverGroup>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm/6 font-semibold text-white">
                    Start free trial <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
                
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                            alt=""
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                            className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-400"
                        >
                            <span className="sr-only">Close menu</span>
                            <X aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-white/10">
                            <div className="space-y-2 py-6">
                            {/* <Disclosure as="div" className="-mx-3">
                                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white/5">
                                Product
                                <ChevronDown aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                </DisclosureButton>
                                <DisclosurePanel className="mt-2 space-y-2">
                                {[...products, ...callsToAction].map((item) => (
                                    <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white hover:bg-white/5"
                                    >
                                    {item.name}
                                    </DisclosureButton>
                                ))}
                                </DisclosurePanel>
                            </Disclosure> */}
                            {nav_links.map((item) => (
                                <a 
                                    key={item.name} 
                                    href={item.href} 
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">
                                    {item.name}
                                </a>
                            ))}

                            </div>
                            <div className="py-6">
                            <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                            >
                                Start free trial
                            </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    ) 
}