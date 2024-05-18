import { emptyString } from "../../render/render-const";
export function searchSiblingItem(lineData, lineDataList, direction) {
    const index = lineDataList.indexOf(lineData);
    if (index === -1) {
        // Console.error('lineDataList should contain lineData');
        return null;
    }
    const siblingIndex = index + direction;
    const siblingItem = siblingIndex in lineDataList ? lineDataList[siblingIndex] : null;
    if (!siblingItem) {
        return null;
    }
    if (siblingItem.trimmedLine === emptyString) {
        const updatedDirection = direction + (direction >= 0 ? 1 : -1);
        return searchSiblingItem(lineData, lineDataList, updatedDirection);
    }
    return siblingItem;
}
export function getIsEdgeLine(lineData, lineDataList, direction) {
    const { selector } = lineData;
    const foundItem = searchSiblingItem(lineData, lineDataList, direction);
    return !foundItem || foundItem.selector !== selector;
}
export function getParent(lineData, lineDataList) {
    const linaDataListLength = lineDataList.length;
    for (let lineDataIndex = linaDataListLength - 1; lineDataIndex >= 0; lineDataIndex -= 1) {
        const lineDataCandidate = lineDataList[lineDataIndex];
        if (lineDataCandidate.spaceCount < lineData.spaceCount) {
            return lineDataCandidate;
        }
    }
    // Console.error('Parent not found');
    return null;
}
//# sourceMappingURL=navigation.js.map