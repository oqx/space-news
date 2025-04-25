/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Article {
  id: number;
  /** @maxLength 250 */
  title: string;
  authors: Author[];
  /**
   * @format uri
   * @maxLength 200
   */
  url: string;
  /**
   * @format uri
   * @maxLength 500
   */
  image_url: string;
  news_site: string;
  summary: string;
  /** @format date-time */
  published_at: string;
  /** @format date-time */
  updated_at: string;
  featured?: boolean;
  launches: Launch[];
  events: Event[];
}

export interface Author {
  /** @maxLength 250 */
  name: string;
  socials?: Socials | null;
}

export interface Blog {
  id: number;
  /** @maxLength 250 */
  title: string;
  authors: Author[];
  /**
   * @format uri
   * @maxLength 200
   */
  url: string;
  /**
   * @format uri
   * @maxLength 500
   */
  image_url: string;
  news_site: string;
  summary: string;
  /** @format date-time */
  published_at: string;
  /** @format date-time */
  updated_at: string;
  featured?: boolean;
  launches: Launch[];
  events: Event[];
}

export interface Event {
  /**
   * @min -2147483648
   * @max 2147483647
   */
  event_id: number;
  provider: string;
}

export interface Info {
  version: string;
  news_sites: string[];
}

export interface Launch {
  /** @format uuid */
  launch_id: string;
  provider: string;
}

export interface PaginatedArticleList {
  /** @example 123 */
  count: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null;
  results: Article[];
}

export interface PaginatedBlogList {
  /** @example 123 */
  count: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null;
  results: Blog[];
}

export interface PaginatedReportList {
  /** @example 123 */
  count: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null;
  results: Report[];
}

export interface Report {
  id: number;
  /** @maxLength 250 */
  title: string;
  authors: Author[];
  /**
   * @format uri
   * @maxLength 200
   */
  url: string;
  /**
   * @format uri
   * @maxLength 200
   */
  image_url: string;
  news_site: string;
  summary?: string;
  /** @format date-time */
  published_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface Socials {
  /**
   * @format uri
   * @maxLength 200
   */
  x?: string;
  /**
   * @format uri
   * @maxLength 200
   */
  youtube?: string;
  /**
   * @format uri
   * @maxLength 200
   */
  instagram?: string;
  /**
   * @format uri
   * @maxLength 200
   */
  linkedin?: string;
  /**
   * @format uri
   * @maxLength 200
   */
  mastodon?: string;
  /**
   * @format uri
   * @maxLength 200
   */
  bluesky?: string;
}
