# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.5.0]

### Added

- Add export map to `package.json`.

## [2.4.0]

### Added

- `intword` now supports negative integers.
- `intcomma` now has tests confirming it does support negative numbers, but no changes were made to the code.

### Changed

- Bumped LICENSE to 2020.

## [2.3.0]

### Added

- `ordinal` now accepts a second boolean parameter (that defaults to `false`) that outputs 1 through 9 as spelled out (first, third, seventh, etc.) instead of as numeral ordinals, per AP style rules.

## [2.2.1]

### Fixed

- Added missing `types` directory to the `package.json` `files` list.

## [2.2.0]

### Added

- Added TypeScript type file.

### Fixed

- Explicitly convert supplied values to strings with `toString()` in functions that short circuit to guarantee it returns the correct type.

### Changed

- Updated LICENSE year to 2019
- Updated dependencies
- General housekeeping of the repo
- Add Node 11 to test matrix
- Moved tests to `__tests__` directory so we stop shipping them in the npm bundle

## [2.1.1]

### Fixed

- Fixed bug with `pluralize` where an Array with a single number in it that's not `1` is considered plural due to `parseFloat` and `Number` being weird when passed an Array.

## [2.1.0]

### Added

- Added `unpkg` and `jsdelivr` fields to package.json
- Added `widont` function

### Removed

- Removed `umd:main` field from package.json

## [2.0.1]

### Fixed

- Fixed bug in `aptime` where it would return `0` for times at 12 p.m. when there were also minutes (thanks @jmuyskens)

## [2.0.0]

### Added

- Added `aptime` function
- Added `capfirst` function
- Added `pluralize` function
- Added `yesno` function

### Changed

- Removed `date-fns` dependency, which means date/time based functions (`apdate`, `apmonth`, `aptime`) **no longer can parse ISO date strings** (or anything else someone may have thrown at it that `date-fns/parse` could have handled)

### Removed

- Removed `lodash` dependency
- Removed `apstate` and `postal` functions, they were slightly too specific and out of scope and probably should exist as their own libraries

## [1.2.0]

- Added `postal` function

## [1.1.0]

- Added `apstate` function

## [1.0.0]

- The beginning of time :tada:
- Added `apnumber`, `intcomma`, `intword` and `ordinal` functions
