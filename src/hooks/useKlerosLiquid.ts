import { Contracts } from "constants/contracts";
import { KlerosLiquid } from "generated/contracts";
import useCall from "./useCall";
import { useContract } from "./useContract";

const useKlerosLiquid = () =>
  useContract<KlerosLiquid>(Contracts.KLEROS_LIQUID);

export default useKlerosLiquid;

export const useArbitrationCost = (
  params: Parameters<KlerosLiquid["arbitrationCost"]> | null
) => useCall(useKlerosLiquid(), "arbitrationCost", params);
export const useAppealCost = (
  params: Parameters<KlerosLiquid["appealCost"]> | null
) => useCall(useKlerosLiquid(), "appealCost", params);
export const useAppealPeriod = (
  params: Parameters<KlerosLiquid["appealPeriod"]> | null
) => useCall(useKlerosLiquid(), "appealPeriod", params);
export const useCurrentRuling = (
  params: Parameters<KlerosLiquid["currentRuling"]> | null
) => useCall(useKlerosLiquid(), "currentRuling", params);
