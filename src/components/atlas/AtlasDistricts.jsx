import { districts } from "../../data/districts";
import DistrictMarker from "./DistrictMarker";
import DistrictGlow from "./DistrictGlow";
import DistrictTooltip from "./DistrictTooltip";

/**
 * AtlasDistricts — renders all district markers with glow + tooltip.
 * Drop this anywhere you want the full set of district links.
 */
function AtlasDistricts() {
  return (
    <div className="flex flex-wrap gap-3">
      {districts.map((district) => (
        <DistrictTooltip
          key={district.id}
          label={district.name}
          summary={district.summary}
        >
          <DistrictGlow color={district.color}>
            <DistrictMarker
              title={district.name}
              href={district.href}
              color={district.color}
            />
          </DistrictGlow>
        </DistrictTooltip>
      ))}
    </div>
  );
}

export default AtlasDistricts;
