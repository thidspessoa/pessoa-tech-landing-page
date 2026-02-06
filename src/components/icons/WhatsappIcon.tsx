import { MessageCircleCode } from 'lucide-react';

type Props = {
    className?: string;
};

export const WhatsappIcon = ({ className }: Props) => {
    return (
        <MessageCircleCode className={className} /> 
    )
};