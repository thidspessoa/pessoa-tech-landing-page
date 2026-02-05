import { GridPattern } from "@/src/components/icons/GridPattern";

type Props = {
    className?: string;
};

export const HeroBackground = ({ className }: Props) => {
    return (
     <div className={className}>
        {/* Grid discreto - Levemente mais visível */}
        <div className="absolute inset-0 opacity-[0.07] bg-grid-pattern" />
        
        {/* Linhas geométricas - Opacidade aumentada para sofisticação e clareza */}
        <GridPattern className="absolute inset-0 w-full h-full opacity-25" />
        
        {/* Gradiente de profundidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark opacity-60" />
      </div>
    )
}