# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

* Added `aptime` function
* Added `pluralize` function

### Removed

* Removed `date-fns` dependency, which means date/time based functions (`apdate`, `apmonth`, `aptime`) no longer can parse ISO date strings (or anything else someone may have thrown at it that `date-fns/parse` could have handled)
* Removed `lodash` dependency, and moved needed utilities into the project

## [1.2.0]

* Added `postal` function

## [1.1.0]

* Added `apstate` function

## [1.0.0]

* The beginning of time :tada:
* Added `apnumber`, `intcomma`, `intword` and `ordinal` functions
