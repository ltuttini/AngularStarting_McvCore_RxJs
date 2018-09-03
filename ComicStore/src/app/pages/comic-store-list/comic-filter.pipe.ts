import { PipeTransform, Pipe } from "@angular/core";
import { IComic } from "./comic";

@Pipe({
    name: 'comicFilter'
})

export class ComicFilterPipe implements PipeTransform{
    transform(value: IComic[], filterBy: string): IComic[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((comic: IComic) => 
        comic.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}