import { create } from 'zustand'
import { persist } from 'zustand/middleware';
export type HeatmapInfoSetter = (HeatmapInfoArray: { date: string | null; count: number | null }[]) => void;

export interface HeatmapState {
    Heatmap: { date: string | null; count: number | null }[];

    setHeatmapInfoArray: HeatmapInfoSetter;
}

const useMyPageHeatmapInfoStore = create(
    persist<HeatmapState>(
        (set, get) => ({
            Heatmap: [],
            setHeatmapInfoArray: (HeatmapInfoArray) =>
                set({ Heatmap: HeatmapInfoArray }),

        }),
        {
            name: 'heatmap-array'
        }
    )
);


export default useMyPageHeatmapInfoStore;
