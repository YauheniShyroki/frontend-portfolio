"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import debug from "gulp-debug";

gulp.task("projects", () => {
    return gulp.src(paths.projects.src)
        .pipe(gulp.dest(paths.projects.dist))
        .pipe(debug({
            "projects": "Projects"
        }));
});