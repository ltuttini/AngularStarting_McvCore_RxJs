import { PipeTransform, Pipe } from "@angular/core";


@Pipe({
    name: 'comicFilter'
})

export class ComicFilterPipe implements PipeTransform{
    
    transform(value: any[], filterBy: string): any[] {

        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        return filterBy ? value.filter((comic: any) => 
            comic.title.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}