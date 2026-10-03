type AgentPulseProps = {
    size?: 'small' | 'medium' | 'large';
    color?: 'blue' | 'green' | 'purple';
};

function AgentPulse({ size="medium", color="blue" }: AgentPulseProps) {
    const sizeClasses = {
        small: 'w-4 h-4',
        medium: 'w-8 h-8',
        large: 'w-12 h-12',
    };
    const colorClasses = {
        blue: 'bg-blue-500 shadow-[0_0_10px_rgba(0,0,255,0.5)]',
        green: 'bg-green-500 shadow-[0_0_10px_rgba(0,255,0,0.5)]',
        purple: 'bg-purple-500 shadow-[0_0_10px_rgba(255,0,255,0.5)]',
    };

    return <div className={`rounded-full animate-pulse ${sizeClasses[size]} ${colorClasses[color]}`}></div>;
}

export default AgentPulse;