import { Button } from '../components/Button';

export function DashboardPage() {
    const projects = [
        {
            id: 'ios-app',
            name: 'iOS App',
            url: 'logstream.app/p/ios-app',
            icon: 'smartphone',
            status: 'Active',
            statusColor: {
                bg: 'bg-status-active-bg',
                border: 'border-status-active-border',
                text: 'text-status-active-text',
                dot: 'bg-green-500',
            },
        },
        {
            id: 'marketing-site',
            name: 'Marketing Site',
            url: 'logstream.app/p/marketing',
            icon: 'language',
            status: 'Active',
            statusColor: {
                bg: 'bg-status-active-bg',
                border: 'border-status-active-border',
                text: 'text-status-active-text',
                dot: 'bg-green-500',
            },
        },
        {
            id: 'api-gateway',
            name: 'API Gateway',
            url: 'logstream.app/p/api-gw',
            icon: 'dns',
            status: 'Paused',
            statusColor: {
                bg: 'bg-status-paused-bg',
                border: 'border-status-paused-border',
                text: 'text-status-paused-text',
                dot: 'bg-yellow-500',
            },
        },
        {
            id: 'legacy-monolith',
            name: 'Legacy Monolith',
            url: 'logstream.app/p/legacy-v1',
            icon: 'deployed_code',
            status: 'Archived',
            statusColor: {
                bg: 'bg-status-archived-bg',
                border: 'border-status-archived-border',
                text: 'text-status-archived-text',
                dot: 'bg-gray-400',
            },
            isArchived: true,
        },
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-display">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 w-full border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
                <div className="max-w-[800px] mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-8 bg-primary/10 rounded-lg text-primary">
                            <span className="material-symbols-outlined text-[20px]">terminal</span>
                        </div>
                        <h1 className="font-display font-bold text-lg tracking-tight text-slate-900 dark:text-white">LogStream</h1>
                    </div>
                    {/* Profile */}
                    <div className="flex items-center gap-4">
                        <button className="size-8 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden ring-2 ring-transparent hover:ring-gray-200 dark:hover:ring-gray-700 transition-all">
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAP6SxmGb5d9nZUiY3U36xA2hE7CpulFziqCngq6qe1HAsNDtZe_wA7iuT3I6CTfIhrZm0yYb1_Bz8va1y-IWo0y-XZP8gT906xqlrjHTZaVq6XA5qKV_GztLvgs3cH6unnFJ18xhIm7OeZ1UO378qyVxOf8mUCzXtiNG0LArakWAZuSwkbwskwBTag-_OnYm037rdF6PPeAhzQOOQgtFtBeYboQyh0_ZbKt5sygajO-KdMChG_5seFXc-w5h58D2jT9DkyMlvtY6M')" }}
                            ></div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 w-full max-w-[800px] mx-auto px-6 py-12">
                {/* Page Header */}
                <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Projects</h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your applications and integrations.</p>
                    </div>
                    <Button className="bg-black! dark:bg-white! text-white! dark:text-black! hover:bg-gray-800! dark:hover:bg-gray-200! shadow-sm hover:shadow-md">
                        <span className="material-symbols-outlined text-[18px] mr-2">add</span>
                        New Project
                    </Button>
                </header>

                {/* Projects List */}
                <div className="flex flex-col gap-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`group relative flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-xl hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200 ${project.isArchived ? 'opacity-60 hover:opacity-100' : ''}`}
                        >
                            <div className="flex items-start gap-4">
                                <div className="size-10 sm:size-12 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center shrink-0 text-gray-400">
                                    <span className="material-symbols-outlined">{project.icon}</span>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">{project.name}</h3>
                                    <a className="font-mono text-sm text-gray-500 hover:text-primary transition-colors mt-1 inline-block border-b border-transparent hover:border-primary/30" href="#">{project.url}</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 mt-4 sm:mt-0 pl-[56px] sm:pl-0">
                                <div className={`flex items-center gap-2 px-2.5 py-1 rounded-full border ${project.statusColor.bg} ${project.statusColor.border}`}>
                                    <div className={`size-2 rounded-full ${project.statusColor.dot} ${project.status === 'Active' ? 'animate-pulse' : ''}`}></div>
                                    <span className={`text-xs font-medium uppercase tracking-wide ${project.statusColor.text}`}>{project.status}</span>
                                </div>
                                <button aria-label="Settings" className="size-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-slate-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-800 transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">settings</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
