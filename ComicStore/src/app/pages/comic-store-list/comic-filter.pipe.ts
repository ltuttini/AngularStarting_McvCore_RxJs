import { PipeTransform, Pipe } from "@angular/core";
import { Comic } from "../../models/comic";

@Pipe({
    name: 'comicFilter'
})

export class ComicFilterPipe implements PipeTransform{
    transform(value: Comic[], filterBy: string): Comic[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((comic: Comic) => 
        comic.title.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}