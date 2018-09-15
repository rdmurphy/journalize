# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
