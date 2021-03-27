```javascript
<div>
<GearFilter
  gear={props.gear}
  bandmate={props.bandmate}
  notes={props.notes}
  onTour={tourGear.includes(props.item)}
  deleteFromVan={props.deleteFromVan}
  addToVan={props.addToVan}
/>
</div>
Lines 73-75 delete?}*/
}

const tourGear = useMemo(() => {
  return props.onTour.map((gear) => gear.item);
}, [props.onTour]);
```
